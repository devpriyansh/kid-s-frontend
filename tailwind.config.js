/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'fredoka': ['Fredoka', 'sans-serif'],
        'baloo': ['Baloo 2', 'cursive'],
        'nunito': ['Nunito', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'kid-primary': '#FF6B6B',
        'kid-secondary': '#4ECDC4',
        'kid-yellow': '#FFE66D',
        'kid-purple': '#A78BFA',
        'kid-pink': '#F472B6',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'float': 'float 4s ease-in-out infinite',
        'spin-slow': 'spin 10s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}