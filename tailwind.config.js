/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#5f9ea1",
          hover: "rgba(0, 110, 82, 1)",
          light: "#33975D38",
          dark: "rgb(51, 111, 93)",
        },
        secondary: "#f2f2f2",
        black: "#161616",
      },
      borderColor: {
        md: "4px",
      },
      boxShadow: {
        button: "0 5px 25px 0 rgb(0 0 0 / 25%)",
      },
      lineHeight: {
        11: "48px",
      },
      width: {
        17: "4.375rem",
      },
      maxWidth: {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1270px",
        "1/2": "50%",
      },
      screens: {
        sm: "576px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "992px",
        // => @media (min-width: 1024px) { ... }

        xl: "1200px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
