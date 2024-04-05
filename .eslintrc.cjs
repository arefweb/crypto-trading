module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb-typescript'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh', 'jsx-a11y', 'eslint-plugin-react', 'eslint-plugin-import'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "import/no-absolute-path": "off",
    "react/react-in-jsx-scope": "off",
    "react/function-component-definition": "off",
    "import/extensions": "off",
    "quotes": ["error", "double", { "allowTemplateLiterals": true, "avoidEscape": true }],
    "@typescript-eslint/quotes": ["error", "double", { "allowTemplateLiterals": true, "avoidEscape": true }],
    "react/jsx-props-no-spreading": "off",
    "import/no-extraneous-dependencies": "off",
    "no-param-reassign": "off",
    "arrow-body-style": "off",
  }
}
