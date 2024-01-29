/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "night",
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#34455d",
        },
      },
    ],
    darkTheme: "night",
    logs: false,
  },
};
