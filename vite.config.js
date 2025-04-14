import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '9fd13ac4-f070-48c3-a496-7728952f6d76-00-2kfbuqyufhvz6.janeway.replit.dev'
    ]
  }
})
