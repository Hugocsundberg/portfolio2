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
      transitionDuration: {
        card: "500ms",
      },
      transitionTimingFunction: {
        card: "cubic-bezier(.41,.52,.28,1.03)",
      },
      backgroundImage: {
        gradient:
          "linear-gradient(119deg, rgba(255,255,255,1) 17%, rgba(206,247,255,1) 57%, rgba(251,255,162,1) 100%);",
        gradientDarkBlue: "linear-gradient(-45deg, #b621fe, #1fd1f9)",
        gradientDarkRed: "linear-gradient(-45deg, #ee7752, #e73c7e, #de75f5)",
      },
      borderRadius: {
        "image-medium": "0 16px 16px 0",
        "image-small": "0 8px 8px 0",
        "image-medium-right": "16px 0 0 16px",
        "image-small-right": "8px 0 0 8px",
        "card-medium": "16px",
        "card-small": "8px",
        "icon-medium": "8px 8px 8px 8px",
        "icon-small": "5px 5px 5px 5px",
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

      aboutMeBreak: "1055px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
