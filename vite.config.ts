import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: '/snehilbelekar.github.io/', // Important! Match your repo name
  build: {
    outDir: 'dist',
  },
});