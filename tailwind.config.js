module.exports = {
  content: ["./public/**/*.html", "./public/assets/custom/js/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [
    require('prettier-plugin-tailwindcss')
  ],
}
