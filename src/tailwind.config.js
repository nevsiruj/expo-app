/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: {
    content: ['./src/**/*.html', './src/**/*.ts'],
  },
};
