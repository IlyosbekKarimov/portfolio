import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import process from 'node:process';

// Deployed to GitHub Pages as a project site, so assets live under /portfolio/.
// Override with VITE_BASE=/ when building for a root-domain host (e.g. Vercel).
const BASE = process.env.VITE_BASE ?? '/portfolio/';

// https://vite.dev/config/
export default defineConfig({
  base: BASE,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '#components': resolve(dirname(fileURLToPath(import.meta.url)), 'src/components'),
      '#constants': resolve(dirname(fileURLToPath(import.meta.url)), 'src/constants'),
      '#hooks': resolve(dirname(fileURLToPath(import.meta.url)), 'src/hooks'),
      '#lib': resolve(dirname(fileURLToPath(import.meta.url)), 'src/lib'),
      '#mobile': resolve(dirname(fileURLToPath(import.meta.url)), 'src/mobile'),
      '#store': resolve(dirname(fileURLToPath(import.meta.url)), 'src/store'),
      '#hoc': resolve(dirname(fileURLToPath(import.meta.url)), 'src/hoc'),
      '#windows': resolve(dirname(fileURLToPath(import.meta.url)), 'src/windows'),
    }
  },
});