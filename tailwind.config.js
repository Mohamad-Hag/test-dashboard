/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "ac": "var(--ac)",
        "ac-trn": "var(--ac-trn)",
        "ac-sec": "var(--ac-sec)",
        "prm": "var(--prm)",
        "sec": "var(--sec)",
        "ter": "var(--ter)",
        "prm-txt": "var(--prm-txt)",
        "sec-txt": "var(--sec-txt)",
        "ter-txt": "var(--ter-txt)",
      },
    },
  },
  plugins: [],
};
