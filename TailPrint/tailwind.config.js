module.exports = {
  purge: ['./tailwindprojects/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        "back": "#203674",
        "left": '#071a50',
        "right": '#f1f5f8',
        "bor": "#2d427b",
        "fontText": "#b5c8ff",
        "before":"#2b4286",
        "men": "#8c9dca",
        "hov": "rgb(16,39,101)",
        "clicked": "#142e71",
      
      },
      width:{
        "bac": "95%",
      },
      screens:{
        "tel": {'max': '640px'},
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
