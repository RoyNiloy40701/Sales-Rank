/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ['Monrope', 'monospace'],
        navbar: ['"Plus Jakarta Sans"', 'sans-serif'],
        faq: ["Questrial"]
      },
      colors: {
        'custom-darkNav': '#020407',
        'custom-darkNav2': '#010205',
      },

    },
  },
  plugins: [],
};
