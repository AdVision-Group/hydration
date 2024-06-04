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
        "beige-80-to-transparent-100":
          "linear-gradient(to top, #F6F6EC 0%, #F6F6EC 80%, transparent 100%)",
        none: "none",
        "beige-20-to-transparent-40":
          "linear-gradient(to top, #F6F6EC 0%, #F6F6EC 20%, transparent 40%)",
        "purple-to-transparent": "linear-gradient(#240E32 0 0)",
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
      white: {
        DEFAULT: "#FFFFFF",
        100: "#FFFFFB",
      },
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
    container: {
      padding: {
        DEFAULT: "1rem",
        xl: "4rem",
      },
      screens: {
        xl: "83rem",
      },
    },
  },
  defaultScreens: ["20rem", "75rem"],
  plugins: [fluid, require("tailwindcss-animate")],
};
export default config;
