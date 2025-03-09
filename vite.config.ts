import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      react: path.resolve('./node_modules/react'),
    },
  },
  optimizeDeps: {
    exclude: ['react-tradingview-widget'],
  },
  // server: {
  //   host: '0.0.0.0', // Binds to all available interfaces, including your local IP
  //   port: 5173,       // Default port or any other port you prefer
  //   proxy: {
  //     '/api': {
  //         target: 'https://real-moles-shout.loca.lt',
  //         changeOrigin: true,
  //         secure: false,
  //     },
  // },
  // },
})
