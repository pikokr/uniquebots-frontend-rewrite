module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'discord-dark': '#2C2F33',
        'discord-black': '#23272A',
      },
    },
    minHeight: {
      '56': '14rem'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
  important: true
}
