module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  // src/assets/js holds vendored third-party bundles (bootstrap, prism, ...),
  // which are not ours to lint or fix.
  ignorePatterns: ['dist', '.eslintrc.cjs', 'src/assets/js'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // This is a plain JSX project with no prop-types dependency and no
    // TypeScript, so runtime prop validation is not used.
    'react/prop-types': 'off',
  },
}
