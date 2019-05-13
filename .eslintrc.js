let dftCfg, cfg, rules;

dftCfg = require("fe-code-lint/src/eslint/.eslintrc");
rules = dftCfg.rules;
rules["react/display-name"] = [0];
rules["react/prefer-es6-class"] = [
    "error", "always"
];
cfg = Object.assign({}, dftCfg, {
    root: true,
    plugins: [
        "react"
    ],
    settings: {
        react: {
            version: "16.8.6"
        }
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    parser: "babel-eslint",
    parserOptions: {
        sourceType: "module",
        ecmaFeatures: {
            "jsx": true
        },
        ecmaVersion: 2017
    },
    rules: rules
});
// allow debugger during development
cfg.rules["no-debugger"] = process.env.NODE_ENV === "production" ? 2 : 0;
module.exports = cfg;
