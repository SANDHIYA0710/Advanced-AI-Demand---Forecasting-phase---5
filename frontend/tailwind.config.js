export default {
  darkMode:"class",
  content:["./index.html","./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {

      colors: {
  primary: {
    50:"#fff7ed",
    100:"#ffedd5",
    200:"#fed7aa",
    300:"#fdba74",
    400:"#fb923c",
    500:"#f97316",
    600:"#ea580c",
    700:"#ea580c",
    800:"#9a3412",
    900:"#7c2d12",
    950:"#431407"
  }
},

      fontFamily: {
        sans:["'DM Sans'","sans-serif"],
        display:["'Syne'","sans-serif"],
        mono:["'JetBrains Mono'","monospace"]
      },

      boxShadow: {
        glass:"0 8px 32px 0 rgba(249,115,22,0.15)",
        "orange-glow":"0 0 20px rgba(249,115,22,0.35)"
      },

    },
  },

  plugins:[],
};