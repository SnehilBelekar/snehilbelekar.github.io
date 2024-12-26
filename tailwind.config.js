/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // Important for Vue components
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1E293B', // Dark blue
        'secondary': '#6B7280', // Gray
        'accent': '#3B82F6', // Blue accent
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'], // Example font family
        'serif': ['Merriweather', 'serif']
      },
      spacing: {
        '10px': '10px'
      }
    },
  },
  plugins: [],
}

