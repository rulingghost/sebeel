import { kv } from '@vercel/kv';

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
    // Check if Vercel KV is configured
    if (process.env.KV_REST_API_URL || process.env.KV_URL) {
      const data = await kv.get('site_content');
      if (data) {
        res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate');
        return res.status(200).json({ success: true, data, source: 'kv' });
      }
    }

    // If KV not configured or data not yet created, return empty/null so client uses defaultContent
    return res.status(200).json({
      success: true,
      data: null,
      source: 'default',
      message: 'Vercel KV site_content not found or KV not yet initialized'
    });
  } catch (error) {
    console.error('Error fetching content from Vercel KV:', error);
    return res.status(200).json({
      success: false,
      error: error.message,
      data: null,
      source: 'fallback'
    });
  }
}
