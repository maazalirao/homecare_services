/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6eaed',
          100: '#ccd5db',
          200: '#99abb7',
          300: '#668193',
          400: '#33576f',
          500: '#1A374D', // deep navy blue
          600: '#152c3e',
          700: '#10212e',
          800: '#0a161f',
          900: '#050b0f',
        },
        secondary: {
          50: '#f0f5f7',
          100: '#e0eaef',
          200: '#c1d5df',
          300: '#a2c0cf',
          400: '#83abbf',
          500: '#6998AB', // muted teal
          600: '#547a89',
          700: '#3f5b67',
          800: '#2a3d44',
          900: '#151e22',
        },
        accent: {
          50: '#eaeff2',
          100: '#d4dfe5',
          200: '#a9bfcb',
          300: '#7e9fb1',
          400: '#537f97',
          500: '#406882', // balanced blue
          600: '#335368',
          700: '#263e4e',
          800: '#1a2a34',
          900: '#0d151a',
        },
        neutral: {
          50: '#F5F5F5', // very light gray
          100: '#ebebeb',
          200: '#d6d6d6',
          300: '#c2c2c2',
          400: '#adadad',
          500: '#999999',
          600: '#858585',
          700: '#707070',
          800: '#5c5c5c',
          900: '#333333', // body text color
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.75s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'fadeIn': 'fadeIn 1.2s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0.6', transform: 'scale(1.05)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} 