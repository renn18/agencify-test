/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts}"],
  theme: {
    extend: {
      maskImage: {
        'bottom-half': 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"],
  }
}