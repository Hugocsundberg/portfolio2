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
      borderRadius: {
        "card-medium": "0 20px 20px 0",
        "card-small": "0 10px 10px 0",
        "icon-medium": "0 11px 11px 0",
        "icon-small": "0 7px 7px 0",
      },
      spacing: {
        small: "32px",
        medium: "48px",
        large: "80px",
      },
    },
  },
  plugins: [],
};
