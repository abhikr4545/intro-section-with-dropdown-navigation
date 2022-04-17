module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        epilogue: "Epilogue, sans-serif;"
      },
      colors: {
        almostWhite: "hsl(0, 0%, 98%)",
        mediumGray: "hsl(0, 0%, 41%)",
        almostBlack: "hsl(0, 0%, 8%)"
      },
      backgroundImage: {
        'hero-mobile': "url('./images/image-hero-mobile.png')",
        'hero-desktop': "url('./images/image-hero-desktop.png')",
      }
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1260px",
        xl: "1260px",
        "2xl": "1260px"
      }
    }
  },
  plugins: [],
}