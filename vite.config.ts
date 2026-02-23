import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Hauptseite3/',   // <--- GANZ WICHTIG
  plugins: [react()],
})
