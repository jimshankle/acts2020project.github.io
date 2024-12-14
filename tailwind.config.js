/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#3B5B8F',
        'darker-blue': '#1a365d',
        'gold': '#fbd38d',
      },
      dropShadow: {
        'glow': '0 0 6px rgba(255,255,255,0.8)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
