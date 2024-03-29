/// <reference types= "vitest" />
import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/best-practices/",
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '/': path.resolve(__dirname, 'src'),
      'com': path.resolve(__dirname, 'src/routes/common/'),
      'components': path.resolve(__dirname, 'src/components/'),
      'icons': path.resolve(__dirname, 'src/routes/icons/'),
      'hooks': path.resolve(__dirname, 'src/hooks/'),
    },
  },
});
