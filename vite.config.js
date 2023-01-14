import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://brookeknowles.github.io/portfolio-website/",
  plugins: [react()],
})
