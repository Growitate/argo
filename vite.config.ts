import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 1202,
    strictPort: true,
    allowedHosts: ['argo.cyberpunk.co.in'],
  },
  preview: {
    host: '0.0.0.0',
    port: 1202,
    strictPort: true,
    allowedHosts: ['argo.cyberpunk.co.in'],
  },
});
