module.exports = {
  content: ["**/*.njk"],
  theme: {
    extend: {
      animation: {
        gradient: "gradient 15s ease infinite",
        "gradient-fast": "gradient 7s ease infinite",
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
        gradientDark: "400% 400%",
        gradientDarkRed: "400% 400%",
        gradientDarkBlue: "400% 400%",
      },
      backgroundImage: {
        gradient:
          "linear-gradient(119deg, rgba(255,255,255,1) 17%, rgba(206,247,255,1) 57%, rgba(251,255,162,1) 100%);",
        gradientDarkBlue: "linear-gradient(-45deg, #1A2980, #26D0CE)",
        gradientDarkRed: "linear-gradient(-45deg, #ee7752, #e73c7e, #de75f5)",
      },
      borderRadius: {
        "image-medium": "0 20px 20px 0",
        "image-small": "0 10px 10px 0",
        "image-medium-right": "20px 0 0 20px",
        "image-small-right": "10px 0 0 10px",
        "card-medium": "20px",
        "card-small": "10px",
        "icon-medium": "0 11px 11px 0",
        "icon-small": "0 7px 7px 0",
      },
      spacing: {
        small: "32px",
        medium: "48px",
        large: "80px",
        "card-small": "16px",
        "card-medium": "24px",
        "card-large": "40px",
      },
      boxShadow: {
        card: "0px 4px 100px -20px rgba(0, 0, 0, 0.3)",
        "card-small": "0px 4px 32px -19px rgba(0, 0, 0, 1)",
        "card-smaller": "0px 4px 20px -10px rgba(0, 0, 0, 1);",
      },
    },
    screens: {
      xs: "340px",
      // => @media (min-width: 340px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
