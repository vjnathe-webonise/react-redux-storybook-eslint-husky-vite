module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'no-restricted-exports': 0,
    'import/prefer-default-export': 0,
    'comma-dangle': 0,
    'react/jsx-one-expression-per-line': 0,
  },
  ignorePatterns: [
    '/src/**/*.test.js',
    '/src/**/*.test.jsx',
    '/src/**/*.stories.js',
    '/src/**/.*.stories.jsx',
    '/src/stories/**',
  ],
};
