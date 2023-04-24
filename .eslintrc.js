module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  ignorePatterns: ['node_modules'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/semi': ['error', 'never'],
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    'no-var': 'error',
    'no-eval': 'error',
    'eol-last': 'error',
    'default-case': 'error',
    semi: ['error', 'never'],
    'no-regex-spaces': 'error',
    quotes: ['error', 'single'],
    'constructor-super': 'error',
    'no-invalid-regexp': 'error',
    curly: ['error', 'multi-line'],
    'no-irregular-whitespace': 'error',
    'quote-props': ['error', 'as-needed'],
    'linebreak-style': ['error', 'windows'],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    'comma-dangle': ['error', 'always-multiline'],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        ignoredNodes: ['ConditionalExpression', 'TemplateLiteral'],
      },
    ],
  },
  globals: {
    expect: true,
  },
}
