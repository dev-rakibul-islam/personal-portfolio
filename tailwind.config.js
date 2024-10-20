/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        move1: {
          "0%, 100%": { transform: "translate(-50%, -50%)" },
          "25%": { transform: "translate(50%, -50%)" },
          "50%": { transform: "translate(50%, 50%)" },
          "75%": { transform: "translate(-50%, 50%)" },
        },
        move2: {
          "0%, 100%": { transform: "translate(50%, 50%)" },
          "25%": { transform: "translate(-50%, 50%)" },
          "50%": { transform: "translate(-50%, -50%)" },
          "75%": { transform: "translate(50%, -50%)" },
        },
      },
      animation: {
        "move-1": "move1 5s infinite linear",
        "move-2": "move2 5s infinite linear",
      },
    },
  },
  plugins: [require("daisyui")],
};
