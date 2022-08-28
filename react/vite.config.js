import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    host: true,
    hmr: {
      host: '0.0.0.0',
      port: 3010,
    },
    fs: {
      strict: true,
    }
  },
  plugins: [react()]
})
