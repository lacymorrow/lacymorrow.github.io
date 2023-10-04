module.exports = {
  arrowParens: 'always',
  semi: true,
  trailingComma: 'es5',
  singleQuote: true,
  // pnpm doesn't support plugin autoloading
  // https://github.com/tailwindlabs/prettier-plugin-tailwindcss#installation
  plugins: [require('prettier-plugin-tailwindcss')],
};
