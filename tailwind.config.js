/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],

    },
    extend: {
       // Adicionando novas cores personalizadas
       colors: {
        'custom-purple1': '#C009E3',
        'custom-purple2': '#4909E3',
        'custom-blue': '#12152E',
        'custom-article1': '#6D45A1',
        'custom-article2': '#12152E',
        'custom-article-borda': '#7403CB',
        'custom-c-n': '#2A0449',
      },
       // Adicionando uma nova classe de altura
       height: {
        'custom-article': '38.854375rem',
        'custom-baner': '16rem',
        'custom-c-n': '39.125rem',
        'custom-baner2': '21.6875rem',
        'custom-celular1': '32.8rem',
        'custom-section1': '48.4375rem',
      },
      // Adicionando uma nova classe de largura
      width: {
        'custom-article': '18.5625rem',
        'custom-baner': '75.75rem',
        'custom-c-n': '28.5625rem',
        'custom-celular1': '20.5rem',
        'custom-fundo': '39rem',
      },
      margin: {
        'custom-c-1': '62rem',
        'custom-fundo': '75rem',
      }
    },
  },
  plugins: [require("daisyui"),] }

