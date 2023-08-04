/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--app-color-primary)",
        secondary: "var(--app-color-secondary)",
      },
      colors: {
        primary: "var(--app-color-primary)",
        accent: "var(--app-color-accent)",
      },
    },
  },
  plugins: [],
}

