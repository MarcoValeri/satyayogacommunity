import { defineConfig } from 'vite';
import { config } from 'dotenv';
import react from '@vitejs/plugin-react';

// Load env variables
config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
