import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import vitePluginRequire from "vite-plugin-require"


export default defineConfig({
  plugins: [
    react(), 
    vitePluginRequire.default()
  ],
  server: {
    port:8001,
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
      ],
    },
  }
})

