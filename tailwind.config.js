/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#268BBF",
      },
      lineHeight: {
        custom: "30px",
      },
      backgroundImage: {
        landing: "url(/assets/images/landing-bg.png)",
        clientReview: "url(/assets/images/review/review-bg.png)",
        home: "url(/assets/images/home-bg.svg)",
      },
    },
  },
  plugins: [],
};
