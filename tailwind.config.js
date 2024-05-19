/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EEC643",
        secondary: "#141414",
        "secondary-emphasis": "#1F1F1F",
        "secondary-accent-emphasis": "#2A2A2A",
        "accent-gray": "#8C8D8E",
        "text-white-gray": "#EEF0F2",
      },
    },
  },
  plugins: [],
};
