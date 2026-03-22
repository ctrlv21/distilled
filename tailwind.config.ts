import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        foreground: "#111111",
        "gray-subtle": "#F5F5F3",
        "gray-border": "#E8E8E8",
        "gray-muted": "#777777",
        "gray-faint": "#888888",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      fontSize: {
        "display": ["clamp(5rem, 12vw, 9rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
      },
      letterSpacing: {
        "widest-xl": "0.2em",
      },
    },
  },
  plugins: [],
};

export default config;
