/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'tw-',
  content: ["./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// npx tailwindcss -i ./src/Tailwind.css -o ./src/main.css --watch
