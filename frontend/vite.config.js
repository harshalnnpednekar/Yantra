import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      // Proxy to the selected Backend Engine (FastAPI/Flask/Django) running on 8000
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      // AI Service proxy
      '/ai': {
        target: 'http://localhost:8001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ai/, ''),
      },
      // WebSocket proxy
      '/socket.io': {
        target: 'ws://localhost:8000',
        ws: true,
      },
    },
  },
});
