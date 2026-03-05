/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      xs: '320px',
      sm: '370px',
      md: '600px',
      lg: '768px',
      el: '1000px',
      xl: '1084px',
      dl: '1200px',
      '2xl': '1536px',
      '3xl': '2000px',
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"],
        Audiowide: ["Audiowide", "sans-serif"],
      },
    },
  },
  plugins: [],
}

