/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        headerOutline: "hsl(217, 16%, 45%)",
        scoreText: "hsl(229, 64%, 46%)",
        scissors: "hsl(40, 84%, 53%)",
        spock: "hsl(189, 58%, 57%)",
        paper: "hsl(230, 89%, 65%)",
        lizard: "hsl(261, 72%, 63%)",
        rock: "hsl(349, 70%, 56%)",
        rules: "hsl(237, 49%, 15%)"
      },
      backgroundImage: {
        "pentagon": "url('../public/images/bg-pentagon.svg')",
      }
    },
  },
  plugins: [],
}
