/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        intro: 'url("../images/Pattern.png")',
        body: 'url("../images/Background.png")',
      },
      colors: {
        "blue-bg": "#2355F2",
        "dark-grey": "#828282",
        "medium-gray": "#B1B1B1",
        "light-gray": "#C3C7D3",
        "input-bg": "#F5F7FA",
      },
      fontFamily: {
        "Work-Sans": ["Work Sans", "sans-serif"],
      },
      fontSize: {
        26: "26px",
      },
      lineHeight: {
        30: "30px",
      },
      maxWidth: {
        270: "270px",
        340: "340px",
        314: "314px",
      },
    },
  },
  plugins: [],
};
