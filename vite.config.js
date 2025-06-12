import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/Vansh_Vaishnavi_Quiz_Project/", // Add this line
  plugins: [react()],
});

