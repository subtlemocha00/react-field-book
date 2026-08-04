import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
	{
		// dist is build output. src/assets/js holds vendored third-party
		// bundles (bootstrap, prism, ...), which are not ours to lint or fix.
		ignores: ["dist", "src/assets/js"],
	},
	js.configs.recommended,
	react.configs.flat.recommended,
	react.configs.flat["jsx-runtime"],
	reactHooks.configs.flat.recommended,
	{
		files: ["**/*.{js,jsx}"],
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			globals: globals.browser,
			parserOptions: {
				ecmaFeatures: { jsx: true },
			},
		},
		settings: { react: { version: "19.2" } },
		plugins: { "react-refresh": reactRefresh },
		rules: {
			"react-refresh/only-export-components": [
				"warn",
				{ allowConstantExport: true },
			],
			// This is a plain JSX project with no prop-types dependency and no
			// TypeScript, so runtime prop validation is not used.
			"react/prop-types": "off",
		},
	},
	{
		// Vitest injects describe/it/expect as globals (test.globals in
		// vite.config.js), and tests run in jsdom.
		files: ["**/*.test.{js,jsx}", "tests/**/*.{js,jsx}"],
		languageOptions: {
			globals: { ...globals.browser, ...globals.vitest },
		},
	},
];
