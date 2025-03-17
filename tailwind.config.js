/** @type {import('tailwindcss').Config} */

module.exports = { 
  
  content: ["./node_modules/flyonui/dist/js/*.js"], // Require only if you want to use FlyonUI JS component
  
  // dark mode start here
  darkMode: ['class'],

  flyonui: {
    themes: ['soft', 'dark']
  },
  // dark mode end here

  
  plugins: [
    require("flyonui"),
    require("flyonui/plugin") // Require only if you want to use FlyonUI JS component
  ]
}