/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      backgroundColor: {
        'body-mcn': '#0d2238',
        'header-mcn': '#03080D',
        'modal-mcn': '#0b1b2b',
        'transaction-mcn': '#1a4c63',
        'input-mcn': '#040F1A',
      },
      colors: {
        'label-mcn': '#3A536B',
        'border-mcn': '#1C2F41',
        'title-mcn': '#E7EDF4',
        'subtitle-mcn': '#C4D4E3',
        'text-mcn': '#AFC2D4',
      },
      minHeight: {
        'pages-mcn': 'calc(100vh - 12.25rem)',
      },
    },
  },
  plugins: [],
}
