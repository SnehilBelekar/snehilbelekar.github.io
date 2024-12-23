import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: '/', // Important! Match your repo name
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        assetFileNames: `assets/[name]-[hash][extname]`, // Preserve the hash
        chunkFileNames: `assets/[name]-[hash].js`,
        entryFileNames: `assets/[name]-[hash].js`,
      },
    },
  },
});