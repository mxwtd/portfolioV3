/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    maxHeight: {
      'custom': '75vh',
      'custom3': '95vh'
    },
    minHeight: {
      'custom2': '50vh',
      'custom3': '95vh'
    },
    height: {
      'custom': '68vh',
      'custom2': '45vh',
      'custom3': '50vh',
      'custom4': '75vh',
    },
    width: {
      'custom': '12vw',
      'custom2': '8vw',
    },
    maxWidth: {
      'custom': '40vw',
      'custom2': '10vw',
    },
    boxShadow: {
      'custom': '0px 10px 15px -3px rgba(0, 0, 0, 0.3)',
    }
  },
  plugins: [require("daisyui")],
}
