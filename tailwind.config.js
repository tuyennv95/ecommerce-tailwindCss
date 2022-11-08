/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./index.html", "./src/**/*.{js,jsx}", "./public/script.js"],
  theme: {
    extend: {
      colors: {
        grayBg: "#f1f5f9",
        paragrapText: "#787878",
        hoverLink: "#ff8f9c",
        colorTitleLinkMenu: '#454545',
        colorTextLinkMenu: "#787878",
        colorHeading: "#212121",
        colorParagrap: "#787878",
        colorHong: "#ff8f9c",
        colorYellow: "#f6a355",
        backgroundGray:'#ededed',
      },
      fontSize:{
          "1":"1px",
          "9":"9px",
          "11":"11px",
          "13":"13px",
          "15":"15px",
          "17":"17px",
          "19":"19px",
          "21":"21px",
          "35":"35px",
      },
      screens: {
        xs: "480px",
        sm: "600px",
        md: "960px",
        lg: "1200px",
        xl: "1536px",
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '2/1': '2 / 1',
        '1/1': '1 / 1',
        '5/4': '5 / 4',
        '6/5': '6 / 5',
        'unset':'unset',
      },
    },
  },
  plugins: [],
};
