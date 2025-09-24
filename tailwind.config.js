/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#7701AE',
          dark: '#5E0189',
        },
        accent: '#E02B28',
        accent2: '#8EAE01',
        success: {
          DEFAULT: '#62AF06',
          dark: '#01AE20',
        },
        background: '#0F1222',
        surface: '#1A1F2E',
        text: {
          DEFAULT: '#E7ECF5',
          muted: '#A8B1C7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}