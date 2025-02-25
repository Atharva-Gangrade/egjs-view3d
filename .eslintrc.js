/* eslint-env node */

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint"
  ],
  extends: [
    "eslint:recommended"
  ],
  overrides: [{
    files: [
      "./**/*.{ts,tsx}"
    ],
    extends: [
      "plugin:@typescript-eslint/recommended"
    ],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/triple-slash-reference": "off",
      "@typescript-eslint/adjacent-overload-signatures": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/member-ordering": ["error", {
        "default": [
          // Index signature
          "signature",

          "constructor",

          // Methods
          "public-static-method",
          "protected-static-method",
          "private-static-method",

          "public-abstract-method",
          "protected-abstract-method",
          "private-abstract-method",

          "public-instance-method",
          "protected-instance-method",
          "private-instance-method"
        ]
      }]
    }
  }],
  rules: {
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "es/no-optional-chaining": "off",
    "es/no-rest-spread-properties": "off",
    "es/no-async-functions": "off",
    "es/no-nullish-coalescing-operators": "off",
    "no-empty-pattern": "off"
  }
};
