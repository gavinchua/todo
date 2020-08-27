module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/recommended',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'arrow-spacing': ['error', { 'before': true, 'after': true }],
    'comma-dangle': ['error', {
      'imports': 'never',
      'exports': 'never',
      'functions': 'ignore'
    }],
    'curly': 'error',
    'indent': ['error', 2],
    'keyword-spacing': ['error', { 'before': true, 'after': true }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'object-curly-spacing': ['error', 'always'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'never']
  }
};
