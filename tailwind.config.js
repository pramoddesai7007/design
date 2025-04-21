// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#F76517",
          gray: "#222222",
          white: "#FEFEFE",
        },
      },
      fontFamily: {
        "poppins-regular": "Poppins",
        "poppins-bold": "Poppins-Bold",
        "nunito-regular": "NunitoSans",
        "nunito-semibold": "NunitoSansSemiBold",
        "nunito-bold": "NunitoSansBold",
        "inter-regular": "Inter400",
        "inter-semibold": "Inter600",
        "inter-bold": "Inter700",
        "kurale-regular": "Kurale",
        "poppins-medium": "Poppins-Medium",
      },
      animation: {
        scroll: "scroll 20s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
}
