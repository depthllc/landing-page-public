import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

function getBasePath() {
  const rawBase = process.env.VITE_BASE_PATH

  if (!rawBase || rawBase === '/') {
    return '/'
  }

  return rawBase.endsWith('/') ? rawBase : `${rawBase}/`
}

// https://vite.dev/config/
export default defineConfig({
  base: getBasePath(),
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
