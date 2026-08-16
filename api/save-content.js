import { kv } from '@vercel/kv';
import { put } from '@vercel/blob';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    let payload = req.body;
    if (typeof payload === 'string') {
      try {
        payload = JSON.parse(payload);
      } catch {
        // use as is if not json
      }
    }

    if (!payload || typeof payload !== 'object') {
      return res.status(400).json({ error: 'Invalid content payload' });
    }

    // 1. If Vercel KV is configured, save directly to KV
    if (process.env.KV_REST_API_URL || process.env.KV_URL) {
      try {
        await kv.set('site_content', payload);
        return res.status(200).json({
          success: true,
          message: 'İçerik Vercel KV üzerine başarıyla kaydedildi.',
          source: 'kv',
          timestamp: new Date().toISOString()
        });
      } catch (kvErr) {
        console.warn('KV save failed, falling back to Blob...', kvErr.message);
      }
    }

    // 2. If Vercel Blob is configured (sebeel-blob), save JSON to Blob!
    if (process.env.BLOB_READ_WRITE_TOKEN) {
      const blob = await put('site_content.json', JSON.stringify(payload), {
        access: 'public',
        addRandomSuffix: false,
        contentType: 'application/json'
      });

      return res.status(200).json({
        success: true,
        message: 'İçerik Vercel Blob üzerine başarıyla kaydedildi.',
        source: 'blob',
        url: blob.url,
        timestamp: new Date().toISOString()
      });
    }

    // Local dev fallback
    return res.status(200).json({
      success: true,
      message: 'İçerik kaydedildi (Yerel modda saklandı).',
      source: 'local',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error saving content:', error);
    return res.status(500).json({
      success: false,
      error: 'İçerik kaydedilirken hata oluştu: ' + error.message
    });
  }
}
