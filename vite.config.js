import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      // Only target standard image formats
      filter: (file) => !file.endsWith('.svg'), // Strict rule: Do not touch or modify SVG files at all
      
      // Optimize JPG/JPEG images
      mozjpeg: {
        quality: 75,
      },
      // Optimize PNG images
      optipng: {
        optimizationLevel: 5,
      },
      // Automatically convert PNG/JPG images to lighter WebP format
      webp: {
        quality: 75,
      },
      // Completely disable SVG optimization to prevent code corruption
      svgo: false, 
    }),
  ],
});