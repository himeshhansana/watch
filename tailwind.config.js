export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#FFF9E5",
          100: "#FFF2CC",
          200: "#FFE699",
          300: "#FFD966",
          400: "#FFCC33",
          500: "#D4AF37",
          600: "#B8860B",
          700: "#9C7C08",
          800: "#806600",
          900: "#664D00",
        },
        gray: {
          850: "#1a1a1a",
          950: "#0a0a0a",
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
        float: 'float 10s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      transitionProperty: {
        'colors': 'color, background-color, border-color, text-decoration-color, fill, stroke',
      },
      transitionDuration: {
        '300': '300ms',
      },
    },
  },
  plugins: [],
}