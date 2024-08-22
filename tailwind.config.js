/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

    },
      theme: {
        screens: {
          "phone": {"max":"450px"},
          // => @media (min-width: 640px) { ... }
          
        },
      },
  },
  plugins: [],
}

