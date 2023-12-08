/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#301951',
        secondary: '#1F142F',
        offWhite: '#E7E7E7',
        placeholder: '#BBADCF',
        whiteColor: '#FFF',
        greenColor: '#1FC61B',
        greyColor: '#4B4B4B',
        redColor: '#C61B1B',
        hoverColor: 'rgba(255, 255, 255, 0.3)',
        bgModal: 'rgba(0, 0, 0, 0.8)'
      },
    },
  },
  plugins: [],
}

