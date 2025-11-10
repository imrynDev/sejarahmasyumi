// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Ini memberitahu Tailwind untuk memindai semua file .html di root
    "./index.html", 
    
    // Ini memberitahu Tailwind untuk memindai semua file .js, .jsx, .ts, .tsx
    // yang berada di dalam folder src/ dan sub-foldernya.
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      // Pastikan animasi fade-in Anda ada di sini (jika menggunakan kode sebelumnya)
      // keyframes: { ... }, 
      // animation: { ... }
    },
  },
  plugins: [],
}