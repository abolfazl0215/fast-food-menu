/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0e0e0f',
        bg2: '#161618',
        bg3: '#1e1e21',
        card: '#1a1a1d',
        accent: '#c9a96e',
        accent2: '#e8c98a',
        green: '#4caf7d',
        text1: '#f0ede8',
        text2: '#9e9a94',
        text3: '#6b6762',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      borderColor: {
        DEFAULT: 'rgba(255,255,255,0.07)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(18px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeDown: {
          '0%': { opacity: 0, transform: 'translateY(-8px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.4s ease both',
        fadeIn: 'fadeIn 0.25s ease',
        fadeDown: 'fadeDown 0.15s ease',
      },
    },
  },
  plugins: [],
}
