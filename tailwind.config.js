const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      smb: "320px",
      ...defaultTheme.screens,
    },
    colors: {
      white: "#FFFFFF",
      grey: "#F6F6F6",
      grey2: "#686d76",
      grey3: "#F5F5F5",
      darkBackground1: "#161B22",
      darkBackground2: "#0D1117",
      black: "#121212",
      black2: "#19282F",
      transparent: "transparent",
      current: "currentColor",
      purple: "#7900FF",
      navy: "#141C3A",
      purpleLight: "#e0faff",
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
