/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text-color': '#243c5a',
      },
    },

    container: {
      padding: '20px',
    },
    fontFamily: {
    
      'Poppins': ["Poppins", 'sans-serif'],
    }
  },
  plugins: [],
}