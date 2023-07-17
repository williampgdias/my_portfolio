/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#51a3bc",
        secondary: "#1282a4",
      },
      transitionProperty: {
        width: "width",
      },
      transitionDuration: {
        200: "200ms",
      },
      height: {
        fullHeight: "calc(100vh - 150px)",
      },
    },
  },
  plugins: [],
};
