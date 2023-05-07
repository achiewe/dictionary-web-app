/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    boxShadow: {
      dark: "0px 5px 30px #A445ED",
      light: "0px 5px 30px rgba(0, 0, 0, 0.1)",
    },
  },
  plugins: [],
};
