/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "text-200": "#54595f",
        "primary-blue": "#124FC9",
      },
      borderRadius: {
        DEFAULT: "3px",
      },
    },
  },
  plugins: [],
};
