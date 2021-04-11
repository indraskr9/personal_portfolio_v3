// const colors = require('tailwindcss/colors')
// const _ = require('tailwindcss/defaultConfig')

module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: '#1F1F2B',
        dark2: '#2C2C40',
        white: '#CED2DD',
        primary: '#6083FF',
        primaryDark: '#344C9E',
        gradient1: '#6083FF',
        gradient2: '#9D8FF3',
        gray: '#3838461f',
      },
      zIndex: {
        '-10': '-10',
      },
    },
    gradientColorStops: theme => ({
      grad1: '#6082ff59',
      grad2: '#d45efd59',
    }),
  },
  variants: {
    extend: {
      margin: ['last'],
    },
  },

  plugins: [require('@tailwindcss/line-clamp')],
}
