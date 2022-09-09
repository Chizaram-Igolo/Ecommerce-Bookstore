module.exports = {
  content: [
    "./components/**/*.tsx",
    "./pages/**/*.tsx",
    "./components/**/*.jsx",
    "./pages/**/*.jsx",
    "./public/**/*.html",
  ], //add this line
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        FiraSans: ["FiraSans", "sans-serif"],
        FiraSans_Medium: ["FiraSans_Medium", "sans-serif"],
        FiraSans_SemiBold: ["FiraSans_SemiBold", "sans-serif"],
        FiraSans_Bold: ["FiraSans_Bold", "sans-serif"],
        FiraSans_ExtraBold: ["FiraSans_ExtraBold", "sans-serif"],
        ScriptType: ["ScriptType", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
