import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/01-todo-list/',
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
  }
})
