module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./pages/products/**/*.{ts,tsx}",
    "./pages/categories/**/*.{ts,tsx}",
    "./pages/sell/**/*.{ts,tsx}",
    "./Components/**/*.{ts,tsx}",
  ],
  purge: [
    "./pages/**/*.{ts,tsx}",
    "./pages/products/**/*.{ts,tsx}",
    "./pages/categories/**/*.{ts,tsx}",
    "./pages/sell/**/*.{ts,tsx}",
    "./Components/**/*.{ts,tsx}",],
  theme: {
    themeVariants: ['dark'],
    extend: {},
  },
  variants: {
    backgroundColor: ['responsive', 'dark'],
    textColor: ['responsive', 'dark'],
  },
  plugins: [require('tailwindcss-multi-theme')],
}


