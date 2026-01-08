import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Vite automatically handles SPA routing - all routes fallback to index.html
  // Files in the public folder are served at the root during dev and copied to dist during build
  publicDir: 'public',
})
