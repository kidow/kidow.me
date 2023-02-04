/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}',
    './templates/**/*.{js,ts,jsx,tsx}',
    './theme.config.tsx'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e67a00'
      },
      keyframes: {
        slide: {
          '0%': {
            backgroundPosition: '0 0'
          },
          '100%': {
            backgroundPosition: '60px 0'
          }
        },
        'fade-up': {
          from: {
            opacity: 0,
            transform: 'translate3d(0, -16px, 0)'
          },
          '60%': {
            opacity: 1
          },
          to: {
            transform: 'none'
          }
        },
        'fade-in-top': {
          from: {
            opacity: 0,
            transform: 'translateY(100%)'
          },
          '60%': { opacity: 1 },
          to: { transform: 'none' }
        },
        'fade-in-right': {
          from: {
            opacity: 0,
            transform: 'translateX(-100%)'
          },
          '60%': { opacity: 1 },
          to: { transform: 'none' }
        },
        'fade-in-bottom': {
          from: {
            opacity: 0,
            transform: 'translateY(-100%)'
          },
          '60%': { opacity: 1 },
          to: { transform: 'none' }
        },
        'fade-in-left': {
          from: {
            opacity: 0,
            transform: 'translateX(100%)'
          },
          '60%': { opacity: 1 },
          to: { transform: 'none' }
        },
        'fade-out-top': {
          from: { opacity: 1 },
          '60%': { opacity: 0 },
          to: { transform: '-translateY(-150%)' }
        },
        'fade-out-right': {
          from: { opacity: 1 },
          '60%': { opacity: 0 },
          to: { transform: 'translateX(150%)' }
        },
        'fade-out-bottom': {
          from: { opacity: 1 },
          '60%': { opacity: 0 },
          to: { transform: 'translateY(150%)' }
        },
        'fade-out-left': {
          from: { opacity: 1 },
          '60%': { opacity: 0 },
          to: { transform: '-translateX(150%)' }
        }
      },
      animation: {
        slide: 'slide 2s linear infinite',
        'fade-up': 'fade-up 0.2s linear',
        'fade-in-right': 'fade-in-right 0.2s linear',
        'fade-in-top': 'fade-in-top 0.2s linear',
        'fade-in-bottom': 'fade-in-bottom 0.2s linear',
        'fade-in-left': 'fade-in-left 0.2s linear',
        'fade-out-top': 'fade-out-top 0.2s linear',
        'fade-out-right': 'fade-out-right 0.2s linear',
        'fade-out-bottom': 'fade-out-bottom 0.2s linear',
        'fade-out-left': 'fade-out-left 0.2s linear'
      }
    }
  },
  plugins: [
    require('prettier-plugin-tailwindcss'),
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp')
  ],
  darkMode: 'class'
}
