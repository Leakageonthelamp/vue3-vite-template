module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', 'prettier', '@vue/typescript'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  rules: {
    // override/add rules settings here, such as:
    'vue/no-unused-vars': 'error',
    'vue/multi-word-component-names': 'off',
  },
}
