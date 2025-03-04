import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  assetsInclude: ["**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.gif", "**/*.svg", "**/*.ico", "**/*.JPG"],
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://backend.hestiatkmce.in",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
  