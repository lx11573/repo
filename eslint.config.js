const uni = require('@uni-helper/eslint-config')
const unocss = require('@unocss/eslint-plugin')

module.exports = uni(
  {
    stylistic: {
      useTabs: true,
    },
    overrides: {
      uni: {
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      },
      javascript: {
        'no-console': 'off',
        'prefer-promise-reject-errors': 'off',
        'style/no-tabs': 'off',
      },
      typescript: {
        'ts/consistent-type-definitions': 'off',
      },
    },
    rules: {
      'style/no-tabs': 'off',
      'vue/first-attribute-linebreak': 'off',
      'no-restricted-syntax': 'off',
    },
  },
  unocss.configs.flat,
)
