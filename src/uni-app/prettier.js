module.exports = {
  tabWidth: 2, // tab 宽度为2个空格
  useTabs: false, // 不使用 tab 来做进
  singleQuote: true, // 使用单引号代替双引号
  semi: false, // 句尾添加分号
  trailingComma: 'none', // 在对象或数组最后一个元素后面是否加逗号（在 ES5 中加尾逗号）
  printWidth: 100, // 超过 130 字符换行
  arrowParens: 'avoid', // (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
  proseWrap: 'never',
  endOfLine: 'auto',
  vueIndentScriptAndStyle: true, // vue文件的模板会缩进
  htmlWhitespaceSensitivity: 'ignore', // html换行对空格不敏感
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json'
      }
    },
    {
      files: '.eslintrc',
      options: {
        parser: 'json'
      }
    }
  ]
}
