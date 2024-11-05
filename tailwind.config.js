/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      blur: {
        xs: '1px',
      },
      animation: {
        'spin-slow': 'spin 100s linear infinite',
      },
      fontFamily: {
        'plex-mono': ['"IBM Plex Mono"', 'monospace'],
        'courier-prime': ['"Courier Prime"', 'monospace'],
      },
    },
  },
  plugins: [],
}

