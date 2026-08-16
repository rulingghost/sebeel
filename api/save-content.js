import { kv } from '@vercel/kv';

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

    // If Vercel KV is configured, save directly to Vercel KV key 'site_content'
    if (process.env.KV_REST_API_URL || process.env.KV_URL) {
      await kv.set('site_content', payload);
      return res.status(200).json({
        success: true,
        message: 'İçerik Vercel KV üzerine başarıyla kaydedildi.',
        timestamp: new Date().toISOString()
      });
    }

    // Local dev or KV not linked yet simulation response
    return res.status(200).json({
      success: true,
      message: 'İçerik kaydedildi (Not: Canlıda Vercel KV değişkenleri otomatik aktif olacaktır).',
      timestamp: new Date().toISOString(),
      warning: 'KV_REST_API_URL is not set in this environment.'
    });
  } catch (error) {
    console.error('Error saving content to Vercel KV:', error);
    return res.status(500).json({
      success: false,
      error: 'İçerik kaydedilirken hata oluştu: ' + error.message
    });
  }
}
