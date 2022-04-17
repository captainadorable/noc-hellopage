module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      gray: {
        100: "#363636",
        200: "#3d3d3d",
        300: "#4a4a4a",
        400: "#737373"
      },
      blue: {
        100: "#5064a8",
        200: "#6074c0",
        300: "#7a94f3",
        400: "#bdc6ff",
      },
      yellow: {
        100: "#ffdaaf",
        200: "#ffe7ca",
        300: "#fff2e3"
      }
      
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1100px',
      // => @media (min-width: 1100px) { ... }

      'xl': '1380px',
      // => @media (min-width: 1380px) { ... }

      '2xl': '1550px',
      // => @media (min-width: 1550px) { ... }
    }
  },
  plugins: [],
};
