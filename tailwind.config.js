/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-red': '#BE3144',
        'nav-hover-color': '#0369A1',
        'footer-color':'#303841',
    },
  },
  plugins: [],
}

}