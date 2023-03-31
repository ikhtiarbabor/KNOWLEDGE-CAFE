/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#0459a3',

          secondary: '#e26372',

          accent: '#93bff2',

          neutral: '#22222F',

          'base-100': '#E2E5EE',

          info: '#446CCA',

          success: '#1C977E',

          warning: '#EE9C49',

          error: '#E78279',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
