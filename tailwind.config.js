module.exports = {
  content: ["**/*.njk"],
  theme: {
    extend: {
      animation: {
        gradient: "gradient 15s ease infinite",
      },
      keyframes: {
        gradient: {
          "0%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
          "100%": {
            "background-position": "0% 50%",
          },
        },
      },
      backgroundSize: {
        gradient: "400% 400%",
      },
      backgroundImage: {
        gradient:
          "linear-gradient(119deg, rgba(255,255,255,1) 17%, rgba(206,247,255,1) 57%, rgba(251,255,162,1) 100%);",
      },
    },
  },
  plugins: [],
};
