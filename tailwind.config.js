/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#141211',
          dark: '#0A0807',
          light: '#1e1b19',
          glow: '#818cf8',
        },
        secondary: {
          DEFAULT: '#fb7185',
          dark: '#e11d48',
          light: '#fda4af',
          glow: '#fb7185',
        },
        accent: {
          DEFAULT: '#818cf8',
          dark: '#6366f1',
          light: '#a5b4fc',
        },
        muted: {
          DEFAULT: '#94a3b8',
          dark: '#475569',
          light: '#cbd5e1',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
