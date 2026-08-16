import { put } from '@vercel/blob';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
};

export default async function handler(req, res) {
  // CORS headers
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
        // payload as is
      }
    }

    const { filename, base64, contentType } = payload || {};

    if (!base64 || !filename) {
      return res.status(400).json({ error: 'Filename ve base64 görsel verisi zorunludur.' });
    }

    // Clean base64 string if it contains prefix (e.g. data:image/png;base64,...)
    const base64Data = base64.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');
    const cleanFilename = `uploads/${Date.now()}-${filename.replace(/[^a-zA-Z0-9.-]/g, '_')}`;

    if (process.env.BLOB_READ_WRITE_TOKEN) {
      const blob = await put(cleanFilename, buffer, {
        access: 'public',
        contentType: contentType || 'image/png'
      });

      return res.status(200).json({
        success: true,
        url: blob.url,
        pathname: blob.pathname,
        contentType: blob.contentType
      });
    }

    // Fallback if BLOB_READ_WRITE_TOKEN is not configured in local environment:
    // Return the base64 data URL so preview and testing work seamlessly
    const simulatedUrl = base64.startsWith('data:') ? base64 : `data:${contentType || 'image/png'};base64,${base64}`;
    return res.status(200).json({
      success: true,
      url: simulatedUrl,
      warning: 'BLOB_READ_WRITE_TOKEN Vercel üzerinde otomatik atanır. Yerel ortamda görsel veri URI olarak sağlandı.'
    });

  } catch (error) {
    console.error('Error uploading image to Vercel Blob:', error);
    return res.status(500).json({
      success: false,
      error: 'Görsel yüklenirken hata oluştu: ' + error.message
    });
  }
}
