/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-blue': 'rgb(68, 50, 203)',
        'custom-green': 'rgb(211, 241, 143)',
        'dark-blue' : 'rgb(22, 16, 64)',
        'dark-grey' : 'rgb(36, 33, 39)',
        'dark-green' : 'rgb(27, 33, 14)',
        "dark-brown" : 'rgb(42, 39, 39)',
        "custom-purple" : 'rgb(192, 186, 233)'

      },
      textColor: {
        'custom-green': 'rgb(211, 241, 143)',
        'custom-blue': 'rgb(68, 50, 203)',
        "custom-purple" : 'rgb(192, 186, 233)',
        'custom-dark-blue' : 'rgb(17, 11, 55)',
        'custom-light-blue' : 'rgb(142, 136, 247)'
      },
    },
  },
  plugins: [],
}