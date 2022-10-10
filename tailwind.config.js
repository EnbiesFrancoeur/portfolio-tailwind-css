/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#7e22ce',
        secondary: '#64748b',
        dark: '#0f172a',
        facebook: '#385898',
        twitter: '#1d9bf0',
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}
