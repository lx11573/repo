'use strict'

module.exports = {
  types: [
    {
      value: 'feat',
      name: '✨  feat:     一个新的功能',
    },
    {
      value: 'fix',
      name: '🐞  fix:      修复一个 BUG',
    },
    {
      value: 'refactor',
      name: '🛠   refactor: 重构',
    },
    {
      value: 'docs',
      name: '📚  docs:     文档变更',
    },
    {
      value: 'test',
      name: '🏁  test:     测试用例',
    },
    {
      value: 'chore',
      name: '🗯   chore:    其他更改（不包含 src 中的更新以及测试用例的更改）',
    },
    {
      value: 'style',
      name: '💅  style:    代码格式化变更)',
    },
    {
      value: 'revert',
      name: '⏪  revert:   还原提交',
    },
  ],

  scopes: [],

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
}
