const presets = [
    [
        "@babel/preset-env",
        {
            targets: {
                edge: "17",
                firefox: "60",
                chrome: "67",
                safari: "11.1",
                ie: "9"
            },
            useBuiltIns: "entry",
            corejs: 3
        },
    ],
    ["@babel/preset-react"]
];
const plugins = [
    [
        "@babel/plugin-transform-runtime",
        {
            "absoluteRuntime": false,
            "corejs": 3,
            "helpers": true,
            "regenerator": true,
            "useESModules": false
        }
    ],
    ["@babel/plugin-syntax-dynamic-import"],
    ["react-hot-loader/babel"]
];
module.exports = { presets, plugins };
