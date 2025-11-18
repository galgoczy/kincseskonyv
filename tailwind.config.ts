import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF5F9',
          100: '#FFE1ED',
          200: '#FFC7DB',
          300: '#FFB5D8',
          400: '#FF8BC0',
          500: '#FF5BA8',
          600: '#E63E8F',
        },
        secondary: {
          50: '#F0FFF5',
          100: '#DEFFEB',
          200: '#C2F5D6',
          300: '#A8E6CF',
          400: '#7DD3B0',
          500: '#52C093',
        },
        accent: {
          50: '#FFFBEB',
          100: '#FFF4CC',
          200: '#FFED99',
          300: '#FFE66D',
          400: '#FFD63D',
          500: '#FFC700',
        },
        background: '#FFF8F0',
        surface: '#FFFFFF',
        border: '#F0E6DC',
        textPrimary: '#2D2424',
        textSecondary: '#6B5B51',
        textMuted: '#A89B92',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        handwriting: ['Caveat', 'cursive'],
        playful: ['Indie Flower', 'cursive'],
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      boxShadow: {
        'pink-lg': '0 10px 30px rgba(255, 181, 216, 0.2)',
        'mint-lg': '0 10px 30px rgba(168, 230, 207, 0.2)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
