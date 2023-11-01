const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    defaultTheme: "dark",
    screens: {
      smb: "320px",
      ...defaultTheme.screens,
    },
    colors: {
      primary: "#000000",
      white: "#e6e7e8",
      white2: "#FAEDF0",
      grey: "#F6F6F6",
      grey2: "#686d76",
      grey3: "#F5F5F5",
      darkBackground1: "#111119",
      darkBackground2: "#0D1117",
      black: "#121212",
      black2: "#19282F",
      transparent: "transparent",
      current: "currentColor",
      purple: "#7900FF",
      navy: "#141C3A",
      purpleLight: "#e0faff",
      green: "#01FF94",
      greenBackground: "rgba(1, 255, 148, 0.05)",
      greenBackground2: "rgba(1, 255, 148, 0.1)",
      text1: "#61677A",
    },
    extend: {
      fontFamily: {
        "Varela-Round": ["Varela Round", "sans-serif"],
        "Russo-One": ["Russo One", "sans-serif"],
        Nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
