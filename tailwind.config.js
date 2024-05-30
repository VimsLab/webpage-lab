module.exports = {
  content: ["./src/**/**/*.{html,js}",
    "./**/@material-tailwind/**/*.{html,js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          lighter: 'hsl(207, 73%, 52%)',
          default: 'hsl(207, 73%, 57%)',
          darker: 'hsl(207, 73%, 44%)'
        }
      }
    }
  },
  variants: {},
  plugins: []
};
