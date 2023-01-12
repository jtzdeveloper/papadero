/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin")

const Myclass = plugin(function( {addUtilities }){
  addUtilities({
    ".my-rotate-y-180":{
      transform: "rotateY(180deg)"
    },
    ".preserve-3d":{
      transformStyle:"preserve-3d"
    }
  })
})

module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    screens: {
      sm: '768px',
      md:'820px',
      mm:'912px',
      xl:'1024px'
    },
    extend: {
      screens: {
         'print': { 'raw': 'print' },
     },
     keyframes: {
      wiggle: {
        '0%, 100%': { transform: 'rotateY(180deg)' },
        '60%': { transform: 'rotateY(-180deg)' },
      },
      fade:{
        '0%': { opacity:'0'},
        '100%': {opacity:'1'}
      },
      fadeOut:{
        '0%': { opacity:'1'},
        '100%': {opacity:'0'}
      }
    },
    animation: {
      wiggle: 'wiggle 2s ease-in-out infinite',
      fade: 'fade 1s ease-in',
      fadeOut: 'fadeOut 1s ease-in-out '
    }
    },
  },
  plugins: [Myclass],
}
