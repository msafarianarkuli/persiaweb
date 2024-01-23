/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "text-0": "#000",
        "text-100": "#969696",
        "text-200": "#54595f",
        "text-300": "#7a7a7a",
        "text-700": "#3B3B3B",
        "primary-blue": "#124FC9",
        "primary-green": "#61CE70",
        "light-primary-blue": "#3296C9",
        "bg-100": "#F1F2F3",
        "bg-200": "#E2E2E2",
      },
      borderRadius: {
        DEFAULT: "3px",
        "rounded-md": "5px",
      },
      fontSize: {
        sm: "14.4px",
        "3xl": "29px",
        "5xl": "36px",
      },
    },
  },
  plugins: [],
};
