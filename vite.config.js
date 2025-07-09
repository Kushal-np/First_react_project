import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
   server: {
    host: true, // allows listening on all addresses (0.0.0.0)
    allowedHosts: [
      'localhost',
      '192.168.1.13',         // your local IP
      'https://fce32903e5ae.ngrok-free.app',   // add your exact ngrok host here
      // or just use 'all' to allow all hosts (less secure)
      // 'all'
    ],
  },
})
