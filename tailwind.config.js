/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      padding: {
        '18': '4.5rem',
        '30': '7.5rem',
      }
    },
  },
  plugins: [],
};
