/** @type {import('tailwindcss').Config} */

module.exports = { 
  content: [
    "./components/*/.{js,vue,ts}",
    "./layouts/*/.vue",
    "./pages/*/.vue",
    "./plugins/*/.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./node_modules/flyonui/dist/js/*.js"
  ],
  
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