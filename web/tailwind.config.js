/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,tsx}",
    "./layouts/**/*.{js,ts,tsx}",
    "./components/**/*.{js,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dmsans: ["Dm Sans"],
        fkgroteskregular: ["FKGroteskRegular"],
        fkgroteskthin: ["FKGroteskRegular"],
      },

      lineHeight: {
        base: "1.25",
        fit: "100%",
      },

      letterSpacing: {
        regular: ".01em",
      },
    },
  },
  plugins: [],
};
