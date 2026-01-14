/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        space: "var(--color-space)",
        horizon: "var(--color-horizon)",
        sun: "var(--color-sun)",
        main: "var(--text-main)",
        nav: "var(--color-nav)",
      },
      fontFamily: {
        title: ["var(--font-title)"],
        body: ["var(--font-body)"],
      },
    },
  },
  plugins: [],
};
