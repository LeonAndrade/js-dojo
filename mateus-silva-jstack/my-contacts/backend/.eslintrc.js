module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-console': 'off',
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'comma-dangle': 'off',
    camelcase: 'off',
    'object-curly-newline': 'off',
    'no-unused-vars': ['error', { argsIgnorePatter: 'next' }]
  },
};
