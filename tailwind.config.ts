import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000",
        foreground: "#fff",

        primary: {
          background: "#fff",
          foreground: "#000",
        },
      },
    },
  },
};
export default config;
