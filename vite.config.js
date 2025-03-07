import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  assetsInclude: ["**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.gif", "**/*.svg", "**/*.ico", "**/*.JPG"],
  plugins: [react()],
  server: {
    proxy: {
    },
  },
});
  