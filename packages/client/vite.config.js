import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/v1': {
        target: 'http://localhost:4040',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/server/, ''),
        ws: true,
      },
    },
  },
  hmr: {
    host: 'http://localhost:4040',
  },
});
