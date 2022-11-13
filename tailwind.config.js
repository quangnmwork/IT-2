module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  mode: 'jit',
  theme: {
    extend: {
      colors: {},
      boxShadow: {},
    },
  },

  plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/line-clamp'), require('daisyui')],
  // daisyUI config (optional)
};

