/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // ✅ Ambil hanya dari folder src
    "!./node_modules/**/*",            // ❌ Abaikan node_modules
  ],
  theme: {
    extend: {
      fontFamily: {
        amiri: ["Amiri, serif"],
      },
    },
  },
  plugins: [],
};
