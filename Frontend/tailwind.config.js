const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./Icons/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        green: {
          950: "#32CD32",
        },
        whiteBG: {
          950: "#F5F5F5",
        },
      },
      fontFamily: {
        Nunito: ["Nunito", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
