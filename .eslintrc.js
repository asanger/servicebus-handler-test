const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  extends: [
    "airbnb-base",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ts"]
      }
    }
  },
  rules: {
    // typescript
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-explicit-any": "off",

    // builtins
    camelcase: OFF,
    "class-methods-use-this": OFF,
    "comma-dangle": [ERROR, "always-multiline"],
    "default-case": OFF,
    eqeqeq: [ERROR, "always", { null: "ignore" }],
    "global-require": OFF,
    "no-underscore-dangle": OFF,
    "no-console": OFF,

    // eslint-plugin-import
    "import/order": OFF,

    // eslint-plugin-prettier
    "prettier/prettier": [
      ERROR,
      {
        printWidth: 80,
        tabWidth: 4,
        singleQuote: true,
        trailingComma: "es5",
        bracketSpacing: true,
        semi: true,
        useTabs: false,
        jsxBracketSameLine: false
      }
    ]
  }
};