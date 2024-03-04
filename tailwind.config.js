/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1400px",
      },
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"],
      },
      colors: {
        "cus-red": "#ef4a23",
        "cus-blue": "#3749bb",
        "cus-gray": "#666666",
      },
    },
  },
  plugins: [],
};
