module.exports = {
  env: {
    es6: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    __DEV__: 'readonly',
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/state-in-constructor': 0,
    'react/no-unused-state': 0,
    'react/static-property-placement': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jxs', '.js'],
      },
    ],
    'import/prefer-default-export': 'off',
  },
};
