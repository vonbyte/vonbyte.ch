module.exports = {
  parser: "vue-eslint-parser",
  extends: [
    'plugin:vue/recommended',
    'plugin:gridsome/recommended'
  ],
  // add your custom rules here
  rules: {
    'vue/html-indent': ['error', 2],
    'vue/no-v-html': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
