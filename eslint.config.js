const uni = require('@uni-helper/eslint-config')
const unocss = require('@unocss/eslint-plugin')

module.exports = uni(
  {
    overrides: {
      uni: {
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      },
    },
    rules: {
      '@typescript-eslint/consistent-type-definitions': 'error',
    },
  },
  unocss.configs.flat,
)
