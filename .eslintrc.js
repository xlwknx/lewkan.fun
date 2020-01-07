module.exports = {
	parser: "babel-eslint",
	env: {
		browser: true,
		es6: true,
	},
	extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly",
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: "module",
	},
	plugins: ["react"],
	rules: {
		indent: ["error", "tab"],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: 0,
		"react/prop-types": 0,
	},
};
