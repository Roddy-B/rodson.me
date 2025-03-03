import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        custone: "#6845e8",
        custtwo: "#33d2ff",
        custthree: "#000000",
      },
      fontFamily: {
        franklin: ["Libre Franklin", "sans-serif"],
        GTWalsheimPro: ["GT Walsheim Pro", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
      backgrounImg: {
        bckImg: "url(/code.png)",
      },
    },
  },
  plugins: [],
} satisfies Config;
