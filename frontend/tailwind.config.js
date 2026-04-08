/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          50: '#f0fdfe',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
      },
      backgroundColor: {
        'dark-primary': '#0a0e27',
        'dark-secondary': '#1a1f3a',
      },
      textColor: {
        'dark-primary': '#ffffff',
      },
      borderColor: {
        'dark-border': 'rgba(255, 255, 255, 0.15)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'drift': 'drift 12s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
