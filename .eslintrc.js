module.exports = {
  extends: [
    'react-app',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  plugins: [
    'react-hooks',
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['./src']
      }
    },
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  }
}