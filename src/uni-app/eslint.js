const prettier = require('./prettier')

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['plugin:vue/essential', 'airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['vue'],
  globals: {
    uni: 'writable',
    getCurrentPages: 'writable',
    getApp: 'writable',
    vuex: 'writable',
    __wxConfig: 'writable'
  },
  rules: {
    'import/no-unresolved': [
      2,
      {
        ignore: ['^@/', 'vuex', 'vue', '@dcloudio/uni-app', 'pinia'] // @ 是设置的路径别名
      }
    ],
    'import/extensions': 0,
    'vue/multi-word-component-names': 0,
    'consistent-return': 0,
    'import/prefer-default-export': 0,
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    'prettier/prettier': [
      'error',
      {
        ...prettier
      }
    ]
  },
  settings: {
    polyfills: ['fetch', 'promises', 'url']
  }
}
