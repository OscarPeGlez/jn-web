module.exports = {
  extends: ['airbnb-typescript-prettier', 'plugin:jest/recommended'],
  rules: {
    'no-param-reassign': 'off',
    'import/prefer-default-export': 'off',
    'no-shadow': 'off',
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-console': 'off',
        'no-restricted-globals': ['error', 'event', 'fdescribe'],
        'no-useless-constructor': 'off',
        'react/prefer-stateless-function': 'off',
        'class-methods-use-this': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {
            allowExpressions: true,
            allowTypedFunctionExpressions: true,
            allowHigherOrderFunctions: true,
          },
        ],
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            vars: 'all',
            args: 'after-used',
            ignoreRestSiblings: true,
          },
        ],
      },
    },
  ],
};
