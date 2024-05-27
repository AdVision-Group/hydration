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
      },
    },
    screens,
    colors: {
      white: {
        0: "#FFFFFF",
        100: "#FFFFFB",
        300: "#F6F6EC",
      },
      flamingo: "#E53E76",
      pink: {
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
    borderRadius: {
      sm: "8px",
      lg: "32px",
      xl: "50px",
    },
    fontFamily: {
      geist: ["Geist", "sans-serif"],
      gazpacho: ["Gazpacho", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    boxShadow: {
      "pink-inset": "0 0 16px 0 #DFB1F3 inset",
    },
  },
  container: {
    center: true,
    padding: {
      DEFAULT: "1.25rem",
      xxl: "4rem",
    },
    screens: {
      xl: "75rem",
    },
  },
  defaultScreens: ["20rem", "75rem"],
  plugins: [fluid],
};
export default config;
