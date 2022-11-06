/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        grayBg: "#f1f5f9",
        paragrapText: "#787878",
        hoverLink: "#ff8f9c",
        colorTitleLinkMenu: '#454545',
        colorTextLinkMenu: "#787878"
      },
      screens: {
        xs: "480px",
        sm: "600px",
        md: "960px",
        lg: "1200px",
        xl: "1536px",
      },
    },
  },
  plugins: [],
};
