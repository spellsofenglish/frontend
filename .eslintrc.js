module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'no-unused-vars': ['error', { caughtErrorsIgnorePattern: '^ignore' }],
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
};
