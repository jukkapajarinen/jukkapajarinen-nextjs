/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      screens: {
        sm: '600px',
        md: '700px',
        lg: '800px',
        xl: '900px',
        '2xl': '1400px',
      },
    },
    extend: {},
  },
  plugins: [],
}