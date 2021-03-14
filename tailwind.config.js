module.exports = {
  purge: ['.public//index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        body_bg_color: '#edf2f7'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
