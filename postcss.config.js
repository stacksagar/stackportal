// If you want to use other PostCSS plugins, see the following:
// https://tailwindcss.com/docs/using-with-preprocessors

const { postcss } = require('tailwindcss/nesting');

module.exports = {
  plugins: ['postcss-import', 'tailwindcss', 'autoprefixer'],
};
