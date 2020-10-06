module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'eslint-config-airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['import', '@typescript-eslint'],
  root: true,
  rules: {
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-empty-interface': 'warn',
    'arrow-body-style': ['error', 'always'],
    'arrow-parens': ['error', 'always'],
    'class-methods-use-this': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'import/extensions': ['error', 'never'],
    'import/order': [
      'warn',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        groups: [['builtin', 'external'], ['internal']],
        'newlines-between': 'always',
      },
    ],
    'import/prefer-default-export': 'off',
    'max-len': ['error', 80],
    'no-empty-pattern': 'warn',
    'no-trailing-spaces': 'error',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', next: '*', prev: ['const', 'let'] },
      { blankLine: 'always', next: 'for', prev: '*' },
      { blankLine: 'always', next: 'function', prev: '*' },
      { blankLine: 'always', next: 'if', prev: '*' },
      { blankLine: 'always', next: 'return', prev: '*' },
      { blankLine: 'always', next: 'switch', prev: '*' },
      { blankLine: 'always', next: 'try', prev: '*' },
      { blankLine: 'always', next: 'while', prev: '*' },
      { blankLine: 'any', next: ['const', 'let'], prev: ['const', 'let'] },
    ],
    'sort-keys': ['error', 'asc', { caseSensitive: false }],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
};
