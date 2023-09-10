module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-css-modules',
    'stylelint-config-rational-order',
    'stylelint-config-prettier'
  ],
  plugins: ['stylelint-order', 'stylelint-declaration-block-no-ignored-properties'],
  rules: {
    'no-descending-specificity': null,
    // https://github.com/stylelint/stylelint/issues/4114
    'font-family-no-missing-generic-family-keyword': null,
    'plugin/declaration-block-no-ignored-properties': true,
    'declaration-block-no-duplicate-properties': true, // 禁止声明快重复属性
    'at-rule-no-unknown': null,
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }]
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts']
}
