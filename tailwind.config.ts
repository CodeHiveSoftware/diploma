import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        colors: {
          primary: '#EBF4F1',
          secondary: '#D1E0DB',
          pink: '#FFCCCC',
          red: '#FF4D4D',
          gray: '#404040',
            black: '#000000',
            white: '#FFFFFF',
        }
    },
  },
  plugins: [],
};
export default config;
