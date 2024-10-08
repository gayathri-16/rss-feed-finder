/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow:{
        'custom':'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;',
        'img':'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px'
      },
      colors:{
         'custom-teal':'#D4F1F4',
         'btn-teal':'#6AF2F0'
      },
      fontSize:{
        'normal':'16px'
      }
    },
  },

  purge: false,
  plugins: [],


}


