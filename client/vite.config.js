import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/scouts-website-REACT-SPRINGBOOT/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true
  }
})
