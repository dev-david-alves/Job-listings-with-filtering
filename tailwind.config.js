/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 5px 10px 0px hsla(180, 29%, 50%, 0.2)",
      },
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      primary: "hsl(180, 29%, 50%)",
      lightGrayish: {
        background: "hsl(180, 52%, 96%)",
        filterTablets: "hsl(180, 31%, 95%)",
      },
      darkGrayish: "hsl(180, 8%, 52%)",
      veryDarkGrayish: "hsl(180, 14%, 20%)",
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
