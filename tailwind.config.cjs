/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {},
    maxHeight: {
      'custom': '75vh',
    },
    minHeight: {
      'custom2': '50vh',
    },
    height: {
      'custom': '68vh',
      'custom2': '45vh',
      'custom3': '50vh',
    },
    width: {
      'custom': '12vw',
      'custom2': '8vw',
    },
    boxShadow: {
      'custom': '0px 10px 15px -3px rgba(0, 0, 0, 0.3)',
    }
  },
  plugins: [require("daisyui"), require('@tailwindcss/aspect-ratio')],
}
