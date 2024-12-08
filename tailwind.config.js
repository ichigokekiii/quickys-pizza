/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./main/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/Pictures/bg-image-pizza.png')",
      }
    }
  },
  plugins: [],
}

