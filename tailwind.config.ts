import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { bleu: "#14213D", jaune: "#F2B705", papier: "#F7F5F0", encre: "#1A1A1A" },
      fontFamily: {
        titre: ["var(--font-titre)", "Impact", "sans-serif"],
        texte: ["var(--font-texte)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
