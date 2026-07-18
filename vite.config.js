import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // use Vite's import.meta.env instead of process.env
  base: import.meta.env.VITE_BASE_PATH || '/movie-app',
})
