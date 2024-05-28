import type { Config } from "tailwindcss";
import fluid, { extract, screens } from "fluid-tailwind";

const config: Config = {
  content: {
    files: [
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/stories/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    extract,
  },
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        "2xs": "0.625rem",
        "4xl": "2.5rem",
        "3xl": "2rem",
      },
      animation: {
        "counter-spin": "counter-spin 1s linear infinite",
      },
    },
    screens,
    colors: {
      white: "#FFFFFF",
      beige: "#F6F6EC",
      pink: "#E53E76",
      lavender: {
        DEFAULT: "#DFB1F3",
        dim: "#DFB1F380",
      },
      purple: {
        // TODO: check if this color is correctly displayed
        dim: "#240E3280",
        DEFAULT: "#240E32",
      },
      blue: "#B3D7FA",
      green: "#B3CF92",
      transparent: "transparent",
    },
    letterSpacing: {
      tight: "-0.02em",
    },
    lineHeight: {
      none: "1",
      tight: "1.2",
      snug: "1.4",
    },
    borderRadius: {
      none: "0",
      sm: "8px",
      md: "10px",
      lg: "16px",
      xl: "32px",
      "2xl": "50px",
      full: "9999px",
    },
    fontFamily: {
      geist: ["Geist", "sans-serif"],
      gazpacho: ["Gazpacho", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    boxShadow: {
      "lavender-inset": "0 0 16px 0 #DFB1F3 inset",
      "blue-inset": "0 0 16px 0 #B3D7FA inset",
    },
  },
  container: {
    center: true,
    padding: {
      DEFAULT: "1rem",
      xxl: "4rem",
    },
    screens: {
      xl: "75rem",
    },
  },
  defaultScreens: ["20rem", "75rem"],
  plugins: [fluid, require("tailwindcss-animate")],
};
export default config;
