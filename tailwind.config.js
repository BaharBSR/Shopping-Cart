/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          960: '#1a73e8',
          970:'#0b499b',
        },
        gray:{
          40:'#404040',
          61:'#333333',
        },
        green:{
          40:'#34a853',
          41:'#167d32',
        },
      },
      boxShadow: {
        '3xl': '0 5px 24px rgba(149, 157, 165, 0.4)',
        '4xl': '0 3px 7px -3px rgba(0, 0, 0, 0.3)',
      },
      borderWidth: {
        '3': '3px',
      },
      borderRadius: {
        'large': '10px',
      },
      width: {
        '45': '45%',
        '450': '450px',
      }
    },
  },
  plugins: [],
}

