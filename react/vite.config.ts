import { copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [
    react(),
    {
      name: 'spa-github-pages-fallback',
      closeBundle() {
        const dist = resolve(__dirname, 'dist')
        const indexHtml = resolve(dist, 'index.html')
        if (existsSync(indexHtml)) {
          copyFileSync(indexHtml, resolve(dist, '404.html'))
        }
      },
    },
  ],
})
