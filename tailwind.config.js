/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', './dist/js/**/*.js'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        'primary-dark': '#0d9488',
        'primary-light': '#ccfbf1',
        dark: '#0f172a',
        secondary: '#64748b',
        putih: '#ffffff',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}
