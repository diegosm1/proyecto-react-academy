module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      'sm': {'min': '576px'}, //movil
      'md': {'min': '768px'}, //tablet
      'lg': '992px', //medida barra de navegacion
      'xl': {'min': '1200px'} //navegador

    },
    fontFamily: {
      'barlow': ['"Barlow Condensed"']
    },
    extend: {
      
    },
  },
  plugins: [],
}
