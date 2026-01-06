/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Tes variables personnalisées
        space: 'var(--color-space)',
        horizon: 'var(--color-horizon)',
        sun: 'var(--color-sun)',
        nav: 'var(--nav-bg)',
        main: 'var(--text-main)',
      },
    },
  },
  plugins: [],
}