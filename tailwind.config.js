/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        jasmine: "hsla(46, 97%, 73%, 1)",
        "celestial-blue": "hsla(207, 59%, 58%, 1)",
        "steel-blue": "hsla(202, 90%, 41%, 1)",
        "oxford-blue": "hsla(225, 54%, 14%, 1)",
        night: "hsla(240, 5%, 8%, 1)",
      },
    },
    fontFamily: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
