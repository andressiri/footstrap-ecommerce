module.exports = {
  env: {
    es2021: true,
    node: true,
    browser: true
  },
  settings: {
    react: {
      version: '18.2.0'
    }
  },
  extends: [
    'standard',
    'plugin:react/recommended'
  ],
  plugins: [
    'react'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    semi: [2, 'always'],
    'no-console': 'error',
    quotes: [2, 'single', { avoidEscape: true }],
    'react/jsx-indent': ['error', 2]
  }
};
