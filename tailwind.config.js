/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        // Menggunakan Poppins untuk semua teks dan judul
        sans: ['Poppins', 'sans-serif'],
        serif: ['Poppins', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}