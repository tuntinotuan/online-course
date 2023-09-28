/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primaryBg: "#1C1D1F",
        primaryBlack: "#2D2F31",
        grayA6: "#6A6F73",
        grayF7: "#F7F9FA",
        grayHover3E: "#3E4143",
        purpleText56: "#5624D0",
        purpleTextA4: "#A435F0",
        purpleTextC0: "#C0C4FC",
        purpleTextDC: "#D1D7DC",
        greenText1E: "#1E6055",
        starBg: "#B4690E",
        starColor: "#4D3105",
        tagYellow: "#ECEB98",
        tagSky: "#ACD2CC",
        darkMain: "#090E1A",
        darkTextCB: "#CBD5E1",
      },
    },
  },
  plugins: [],
};
