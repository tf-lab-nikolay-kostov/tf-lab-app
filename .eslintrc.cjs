module.exports = {
  extends: ["plugin:security/recommended"],

  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
  },

  env: {
    es6: true,
    node: true,
    browser: true,
  },
};
