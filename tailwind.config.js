/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0d0d0d',
        surface: '#161616',
        border: '#2a2a2a',
        secondary: '#888888',
      },
      fontFamily: {
        sans: ['Geist Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
