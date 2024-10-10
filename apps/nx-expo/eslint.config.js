const nx = require('@nx/eslint-plugin');
const baseConfig = require('../../eslint.config.js');

module.exports = [
  ...baseConfig,
  ...nx.configs['flat/react'],
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    // Override or add rules here
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      'no-var': 'off',
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
  { ignores: ['.expo', 'web-build', 'cache', 'dist'] },
];
