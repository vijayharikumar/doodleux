module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        lime: {
          400: '#C0FF00',
          600: '#A3E600'
        },
        darkbg: '#0A0A0A',
        midgray: '#4A4A4A'
      },
      fontFamily: {
        display: ['"Your Figma Font"', 'sans-serif']
      }
    }
  },
  plugins: []
}
