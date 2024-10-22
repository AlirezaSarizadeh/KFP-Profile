import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // base: '/profile/',  // Make sure to include the trailing slash
  base: '/KFP-Profile/', // set to your repository name

  // "homepage": "/profile/",
  server: {
    historyApiFallback: true, // Ensure this is set to handle client-side routing
  },
})
