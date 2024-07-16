/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  mode: "jit",
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
        sm: "15px",
        lg: "15px",
        xl: "0",
        "2xl": "0",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        primary: "#2EFAE7",
        secondary: {
          500: "#A0AEC0",
          600: "#475569",
        },
        danger: {
          500: "#F1595C",
          600: "#D75052",
        },
        black: {
          500: "#111112",
          600: "#475569",
        },
        warning: {
          500: "#FA916B",
          600: "#DF8260",
        },
        info: {
          500: "#0CE7FA",
          600: "#00B8D4",
        },
        success: {
          500: "#50C793",
          600: "#3F9A7A",
        },
        gray: {
          500: "#68768A",
          600: "#475569",
        },
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        base: "0px 0px 1px rgba(40, 41, 61, 0.08), 0px 0.5px 2px rgba(96, 97, 112, 0.16)",
        base2:
          "0px 2px 4px rgba(40, 41, 61, 0.04), 0px 8px 16px rgba(96, 97, 112, 0.16)",
        base3: "16px 10px 40px rgba(15, 23, 42, 0.22)",
        deep: "-2px 0px 8px rgba(0, 0, 0, 0.16)",
        dropdown: "0px 4px 8px rgba(0, 0, 0, 0.08)",

        testi: "0px 4px 24px rgba(0, 0, 0, 0.06)",
        todo: "rgba(235 233 241, 0.6) 0px 3px 10px 0px",
      },
      keyframes: {
        zoom: {
          "0%, 100%": { transform: "scale(0.5)" },
          "50%": { transform: "scale(1)" },
        },
        tada: {
          "0%": { transform: "scale3d(1, 1, 1)" },
          "10%, 20%": {
            transform: "scale3d(1, 1, 0.95) rotate3d(0, 0, 1, -10deg)",
          },
          "30%, 50%, 70%, 90%": {
            transform: "scale3d(1, 1, 1) rotate3d(0, 0, 1, 10deg)",
          },
          "40%, 60%, 80%": {
            transform: "rotate3d(0, 0, 1, -10deg)",
          },
          "100%": { transform: "scale3d(1, 1, 1)" },
        },
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        zoom: "zoom 1s ease-in-out infinite",
        tada: "tada 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};


// #2EFAE7