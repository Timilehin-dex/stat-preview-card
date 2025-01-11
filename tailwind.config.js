/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        darkBlue: {
          mainBackground: "hsl(233, 47%, 7%)",
          cardBackground: "hsl(244, 38%, 16%)",
        },
        violet: {
          accent: "hsl(277, 64%, 61%)",
        },
        neutral: {
          white: "hsl(0, 0%, 100%)",
          paragraph: "hsla(0, 0%, 100%, 0.75)",
          statHeading: "hsla(0, 0%, 100%, 0.6)",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lexend: ["Lexend Deca", "sans-serif"],
      },
    },
  },
  plugins: [],
};
