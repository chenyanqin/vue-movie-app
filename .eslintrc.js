module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
  ],
  plugins: ['vue', 'prettier'],
  rules: {
    'no-console': 0,
    'prettier/prettier': 'error',
    'vue/html-self-closing': 0,
    'no-undef': 0,
    'no-extra-semi': 0,
    'no-mixed-spaces-and-tabs': 0,
    'quotes': ["error", "single"],
    'generator-star-spacing': 0
  }
};
