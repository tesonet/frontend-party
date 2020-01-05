const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: ['./src/index'],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        modules: ['node_modules'],
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(j|t)s(x)?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            babelrc: false,
                            presets: [
                                [
                                    "@babel/preset-env",
                                    {
                                        "targets": {
                                            "browsers": [
                                                "last 2 versions",
                                                "ie 11"
                                            ]
                                        }
                                    }
                                ],
                                '@babel/preset-typescript',
                                '@babel/preset-react',
                            ],
                            plugins: [
                                'react-hot-loader/babel',
                            ],
                        },
                    },
                    "eslint-loader"
                ],
            },
        ],
    },
    devServer: {
        open: true
    },
    devtool: 'eval-source-map',
    plugins: [new ForkTsCheckerWebpackPlugin(), new webpack.NamedModulesPlugin(), new HtmlWebpackPlugin()],
};