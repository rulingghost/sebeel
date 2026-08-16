import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

const devApiPlugin = () => ({
  name: 'dev-api-plugin',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      // 1. GET /api/get-content
      if (req.url === '/api/get-content' && req.method === 'GET') {
        res.setHeader('Content-Type', 'application/json');
        const devFile = path.resolve(__dirname, '.dev-content.json');
        if (fs.existsSync(devFile)) {
          try {
            const data = JSON.parse(fs.readFileSync(devFile, 'utf-8'));
            return res.end(JSON.stringify({ success: true, data, source: 'local-dev' }));
          } catch (e) {
            console.error('Error reading .dev-content.json:', e);
          }
        }
        return res.end(JSON.stringify({ success: true, data: null, source: 'default' }));
      }

      // 2. POST /api/save-content
      if (req.url === '/api/save-content' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
          body += chunk.toString();
        });
        req.on('end', () => {
          try {
            const devFile = path.resolve(__dirname, '.dev-content.json');
            fs.writeFileSync(devFile, body, 'utf-8');
            res.setHeader('Content-Type', 'application/json');
            return res.end(JSON.stringify({
              success: true,
              message: 'İçerik kaydedildi! (Vercel üzerinde KV\'ye otomatik yazılacaktır).',
              timestamp: new Date().toISOString()
            }));
          } catch (err) {
            res.statusCode = 500;
            return res.end(JSON.stringify({ success: false, error: err.message }));
          }
        });
        return;
      }

      // 3. POST /api/upload-image
      if (req.url === '/api/upload-image' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
          body += chunk.toString();
        });
        req.on('end', () => {
          try {
            const payload = JSON.parse(body);
            const url = payload.base64 || '';
            res.setHeader('Content-Type', 'application/json');
            return res.end(JSON.stringify({
              success: true,
              url: url,
              message: 'Görsel yerel önizleme için yüklendi (Vercel üzerinde Blob CDN\'e yüklenir).'
            }));
          } catch (err) {
            res.statusCode = 500;
            return res.end(JSON.stringify({ success: false, error: err.message }));
          }
        });
        return;
      }

      next();
    });
  }
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), devApiPlugin()],
});

