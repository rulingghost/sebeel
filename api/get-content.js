import { kv } from '@vercel/kv';
import { list } from '@vercel/blob';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    // 1. Check if Vercel KV is configured
    if (process.env.KV_REST_API_URL || process.env.KV_URL) {
      try {
        const data = await kv.get('site_content');
        if (data) {
          res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate');
          return res.status(200).json({ success: true, data, source: 'kv' });
        }
      } catch (kvErr) {
        console.warn('KV read failed, trying Blob...', kvErr.message);
      }
    }

    // 2. Check if Vercel Blob is configured (sebeel-blob)
    if (process.env.BLOB_READ_WRITE_TOKEN) {
      try {
        const { blobs } = await list({ prefix: 'site_content.json' });
        if (blobs && blobs.length > 0) {
          const contentBlob = blobs[0];
          const response = await fetch(`${contentBlob.url}?t=${Date.now()}`);
          if (response.ok) {
            const data = await response.json();
            res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate');
            return res.status(200).json({ success: true, data, source: 'blob' });
          }
        }
      } catch (blobErr) {
        console.warn('Blob read failed:', blobErr.message);
      }
    }

    // 3. Fallback to default if no database record yet
    return res.status(200).json({
      success: true,
      data: null,
      source: 'default',
      message: 'No saved content found yet, using default content.'
    });
  } catch (error) {
    console.error('Error fetching content:', error);
    return res.status(200).json({
      success: false,
      error: error.message,
      data: null,
      source: 'fallback'
    });
  }
}
