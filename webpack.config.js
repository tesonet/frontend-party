const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.(s[ac]ss|css)$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {}
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: "svg-url-loader",
                        options: {
                            limit: 10000
                        }
                    }
                ]
            }
        ]
    },
    entry: ["@babel/polyfill", "react-hot-loader/patch", "./src/index.js"],
    resolve: {
        extensions: [".js", ".jsx"],
        alias: { "react-dom": "@hot-loader/react-dom" }
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        publicPath: "/"
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./index.html",
            filename: "./index.html"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({ Promise: "es6-promise-promise" })
    ],
    devServer: {
        contentBase: "./dist",
        hot: true,
        port: 8000,
        historyApiFallback: true
    }
};
