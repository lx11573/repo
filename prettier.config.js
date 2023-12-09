module.exports = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: true,
  semi: true,
  vueIndentScriptAndStyle: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  // 行尾逗号,默认none,可选 none|es5|all
  // es5 包括es5中的数组、对象
  // all 包括函数对象等所有可选
  trailingComma: 'es5',
  // 对象中的空格 默认true
  // true: { foo: bar }
  // false: {foo: bar}
  bracketSpacing: true,
  // 	false:
  // <button
  //   onClick={this.handleClick}>
  //   Click Here
  // </button>
  //
  // 	true:
  // <button
  //   onClick={this.handleClick}
  // >
  //   Click Here
  // </button>
  bracketSameLine: false,
  // JSX标签闭合位置 默认false
  // false: <div
  //          className=""
  //          style={{}}
  //       >
  // true: <div
  //          className=""
  //          style={{}} >
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  arrowParens: 'avoid',
  insertPragma: false,
  requirePragma: false,
  proseWrap: 'never',
  htmlWhitespaceSensitivity: 'strict',
  endOfLine: 'auto',
  rangeStart: 0,
  eslintIntegration: true,
}
