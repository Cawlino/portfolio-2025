/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: { accent: { 100:'#d4e9dd', 300:'#b4d3c0', 400:'#a3c9b1', 500:'#8db69c', 600:'#456c55', 900:'#203529' },
        // Custom aliases if needed, but standard palette is usually sufficient.
        // We can ensure we have access to all colors (Tailwind include them by default)
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
