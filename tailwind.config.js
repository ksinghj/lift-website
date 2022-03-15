const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './components/*.{js,vue,ts}',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        // for the linear green/teal (LIFT green used in app)
        'lift-green': '#00FF47',
        'lift-teal': '#3FFFDC'
      }
    }
  },
  plugins: [],
  css: ['@/assets/css/main.css']
}
