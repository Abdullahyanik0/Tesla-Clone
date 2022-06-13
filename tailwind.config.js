module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        family: "'PT Sans', sans-serif;",
      },
      textColor: {
        text: "#393c41",
        link: "#171a20",
      },
      screens: {
        "2xl": { min: "1023px" },

        xl: { max: "1279px" },

        lg: { min: "1153px" },

        md: { max: "1023" },

        sm: { max: "639px" },
        as: { min: "1279px" },
      },
    },
  },
  plugins: [],
};
