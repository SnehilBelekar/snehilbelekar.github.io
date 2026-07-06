import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'blog-dev-router',
      configureServer(server) {
        server.middlewares.use((req: any, _res: any, next: any) => {
          // Normalize URL path by removing query params and hash
          const urlPath = req.url ? req.url.split('?')[0].split('#')[0] : '';
          
          if (urlPath === '/blogs' || urlPath === '/blogs/') {
            req.url = '/blogs/index.html';
          } else if (urlPath === '/blogs/grc' || urlPath === '/blogs/grc/') {
            req.url = '/blogs/grc/index.html';
          } else if (urlPath === '/blogs/europe-data-sovereignty' || urlPath === '/blogs/europe-data-sovereignty/') {
            req.url = '/blogs/europe-data-sovereignty/index.html';
          }
          next();
        });
      }
    }
  ],
  base: './', // Important! Match your repo name
  build: {
    outDir: 'dist',
  },
});