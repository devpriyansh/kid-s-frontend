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
        'kid-primary': '#60A5FA', // Premium soft blue
        'kid-primary-dark': '#3B82F6',
        'kid-secondary': '#F472B6', // Premium soft pink
        'kid-secondary-dark': '#EC4899',
        'kid-yellow': '#FCD34D', // Soft gold
        'kid-yellow-dark': '#F59E0B',
        'kid-purple': '#C084FC', // Soft lavender
        'kid-purple-dark': '#9333EA',
        'kid-green': '#6EE7B7', // Minty green
        'kid-green-dark': '#10B981',
        'kid-bg': '#F0F9FF', // Soft icy blue background
        'kid-text': '#1E293B', // Deep slate for text
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'float': 'float 5s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'spin-slow': 'spin 12s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blob': 'blob 15s infinite',
        'shine': 'shine 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        shine: {
          '0%': { left: '-100%' },
          '20%': { left: '200%' },
          '100%': { left: '200%' },
        }
      }
    },
  },
  plugins: [],
}