const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    // webpack will take the files from ./src/index
    entry: "./src/index",

    // and output it into /dist as bundle.js
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js",
        publicPath: "/"
    },

    // adding .ts and .tsx to resolve.extensions will help babel look for .ts and .tsx files to transpile
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },

    module: {
        rules: [
            // we use babel-loader to load our jsx and tsx files
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },

            // file loader
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "assets/images",
                        },
                    },
                ],
            },

            // css-loader to bundle all the css files into one file and style-loader to add all the styles  inside the style tag of the document
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader", // compiles Sass to CSS, using Node Sass by default
                ],
            },
        ],
    },
    devServer: {
        historyApiFallback: true,
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
};
