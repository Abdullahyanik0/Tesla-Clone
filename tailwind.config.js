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
        "3xl": { min: "640px" },

        xl: { max: "1279px" },

        lg: { min: "1153px" },

        md: { max: "1023px" },

        sm: { max: "640px" },
        as: { min: "1279px" },
        aa: { max: "400px" },
      },
    },
  },
  plugins: [],
};
