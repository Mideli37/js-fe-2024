module.exports = {
  ignorePatterns: ['dist'],
  env: { browser: true, es2021: true },
  extends: ['eslint:recommended', 'airbnb-base', 'prettier'],
  overrides: [
    {
      env: { node: true },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: { sourceType: 'script' },
    },
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  rules: {
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    'no-underscore-dangle': 'off',
    'max-lines-per-function': ['error', 70],
    'curly': 'error',
  },
};
