import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

const root = resolve(__dirname, 'src');
export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  resolve: {
    alias: {
      '@': root, // This line maps '@/' to 'src'
    },
  },
});
