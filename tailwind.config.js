// const colors = require('tailwindcss/colors')
// const _ = require('tailwindcss/defaultConfig')

const {spacing} = require('tailwindcss/defaultTheme')

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
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme('colors.white'),
            a: {
              color: theme('colors.primary'),
              '&:hover': {
                color: theme('colors.primaryDark'),
              },
              code: {color: '#6083FF'},
            },
            // blockquote: {
            //   borderLeftColor: theme('colors.gray.700'),
            //   color: theme('colors.gray.300'),
            // },
            'h1,h2,h3,h4': {
              color: theme('colors.white'),
            },
            // hr: {borderColor: theme('colors.gray.700')},
            // ol: {
            //   li: {
            //     '&:before': {color: theme('colors.gray.500')},
            //   },
            // },
            // ul: {
            //   li: {
            //     '&:before': {backgroundColor: theme('colors.gray.500')},
            //   },
            // },
            // strong: {color: theme('colors.gray.300')},
            // thead: {
            //   color: theme('colors.gray.100'),
            // },
            // tbody: {
            //   tr: {
            //     borderBottomColor: theme('colors.gray.700'),
            //   },
            // },
          },
        },
      }),
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

  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
}
