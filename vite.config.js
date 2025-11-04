import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Allow overriding the base path via the VITE_BASE environment variable.
  // Default to '/' which is correct for Vercel or most root deployments.
  // Set VITE_BASE='/portfolio-site/' when building for GitHub Pages.
  base: process.env.VITE_BASE || '/',
})
