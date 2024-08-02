import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
 
 const addVariablesForColors= ({ addBase, theme }: any)=> {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
  addBase({
    ":root": newVars,
  });
}
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {},
      borderRadius: {
        DEFAULT: "4px",
      },
      fontSize: {
        "7.5xl": "5.5rem",
        "10xl": "10rem",
        "11xl": "12rem",
        "12xl": "14rem",
        "14xl": "18rem",
        "16xl": "24rem",
        "20xl": "30rem",
      },

      screens: {
        xs: "380px",
        xxl: "1400px",
      },
      colors: {
        primary: {
          50: "hsl(225, 100%, 69%)",
          100: "hsl(225, 100%, 61%)",
          200: "hsl(225, 100%, 56%)",
          300: "hsl(225, 100%, 53%)",
          400: "hsl(225, 100%, 51%)",
          500: "hsl(225, 100%, 50%)",
          600: "hsl(225, 100%, 49%)",
          700: "hsl(225, 100%, 47%)",
          800: "hsl(225, 100%, 44%)",
          900: "hsl(225, 100%, 39%)",
          950: "hsl(225, 100%, 31%)",
        },
        neutral: {
          50: "hsl(0, 0%, 98%)",
          100: "hsl(0, 0%, 96%)",
          200: "hsl(0, 0%, 90%)",
          300: "hsl(0, 0%, 80%)",
          400: "hsl(0, 0%, 68%)",
          500: "hsl(0, 0%, 50%)",
          600: "hsl(0, 0%, 26%)",
          700: "hsl(0, 0%, 10%)",
          800: "hsl(0, 0%, 6%)",
          900: "hsl(0, 0%, 4%)",
          950: "hsl(0, 0%, 2%)",
        }
      },
      keyframes: {
        "bg-shine": {
          "from": {
            "backgroundPosition": "0 0"
          },
          "to": {
            "backgroundPosition": "200% 0"
          }
        },
        slow: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "slow-spin": "slow 10s alternate ease-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "bg-shine": "bg-shine 14s linear infinite"
      },
    },
  },
  plugins: [require("tailwindcss-animate"),addVariablesForColors],
};
export default config;
