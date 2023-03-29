/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {},
    maxHeight: {
      'custom': '65vh',
    },
    paddingTop: {
      'custom': '5rem',
  },
  plugins: [require("daisyui")],
}
