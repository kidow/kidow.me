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
        }
      },
      animation: {
        slide: 'slide 2s linear infinite'
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
