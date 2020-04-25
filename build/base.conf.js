const webpack = require("webpack"),
    path = require("path"),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: [
        // "core-js/modules/es.promise", // 做了按路由加载，所以需要添加这两个依赖在entry里面
        // "core-js/modules/es.array.iterator",
        path.resolve(__dirname,"../src/index.tsx")
    ],
    output: {
        filename: "bundle.js",
        chunkFilename: "[id].[chunkhash].js",
        path: path.resolve(__dirname,"../dist"),
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ["file-loader"]
            },
            {
                test: /\.vue$/,
                exclude:/node_modules/,
                use: ["vue-loader"]
            },
            {
                test: /\.jsx?$/,
                exclude:/node_modules/,
                use: ["babel-loader"]
            },
            // {
            //     test: /\.tsx?$/,
            //     use: [
            //         {
            //             loader: 'tslint-loader',
            //             options: {
            //                 configFile: path.resolve(__dirname, '../tslint.json'),
            //             },
            //         },
            //     ],
            //     exclude: /node_modules/,
            // },
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        // options: {
                        //     // 指定特定的ts编译配置，为了区分脚本的ts配置
                        //     configFile: path.resolve(__dirname, '../tsconfig.json'),
                        // },
                    },
                ],
                exclude: /node_modules/,
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    resolve: {
        extensions: [".js", ".vue", ".jsx", ".json", ".ts", ".tsx"],
        alias: {
            '@':path.resolve(__dirname,'../src'),
        }
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.NormalModuleReplacementPlugin(/es6-promise$/, 'bluebird'),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../index.html"),
            inject: "body"
        }),
        new CopyPlugin([
            { from: path.resolve(__dirname, '../static'), to: path.resolve(__dirname,"../dist") },
        ]),
        // new webpack.ProvidePlugin({
        //     CodeMirror:"CodeMirror"
        // })
    ]
};
