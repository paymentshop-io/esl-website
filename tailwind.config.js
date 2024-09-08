/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        ageo: ['Ageo', 'sans-serif'], // Register Ageo font
      },
      backgroundImage: {
        hero: "url('/images/hero.jpeg')",
      }
    },
  },
  plugins: [],
}
