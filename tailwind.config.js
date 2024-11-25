/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
  			poppins: ['Poppins"', 'sans-serif'],
  			roboto: ['Roboto"', 'sans-serif'],
  			lora: ['Lora"', 'serif'],
  			dancing: ['Dancing Script"', 'cursive'],
  			playfair: ['Playfair Display"', 'serif'],
  			cinzel: ['Cinzel"', 'serif']
  		},
      colors: {
        "dark": '#232A3C',
        "medium": '#293245',
        "light": "#34a853",
        
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
