import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#DE866A",
        bodyBackGround: "#E6E6E6",
        peach: "#E2A08C",
        darkPeach: "#CC9380",
        darkerPeach: "#955845",
      },
    },
  },
  plugins: [],
};
export default config;
