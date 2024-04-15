/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './resources/views/**/*.edge',
    './resources/assets/ts/**/*.ts',
    './inertia/**/*.tsx',
    './inertia/**/*.ts',
  ],
  theme: {
    extend: {
      colors: {
        'gray-bg': '#f7f8fc',
        'accent': '#2977f5',
        'accent-dark': '#1e5abb',
      },
    },
  },
  plugins: [],
}
