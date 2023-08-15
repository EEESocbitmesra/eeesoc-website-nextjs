/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      display: ["var(--headings-font)", "system-ui"],
      body: ["var(--body-font)", "system-ui"],
      code: ["var(--code-font)", "consolas"],
    },
    extend: {
      backgroundImage: {
        footer: "url('/images/footer_bg.png')",
        banner: "url('/images/home/banner.jpg')",
      },

      listStyleType: {
        square: "square",
      },

      colors: {
        purple: "#635cdb",
        gray: "#CCC",
        "light-gray": "#eee",
        "light-purple": "#e8f2ff",
        blue: "#4990bd",
        background: "#202a2d",
        black: "#232323",
      },
    },
  },
  plugins: [],
};
