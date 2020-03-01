const path = require('path');
const config = require('./webpack.config');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(config, {
    mode: 'production',
    output: {
        filename: '[name].[contentHash].js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        minimizer: [
            new HtmlWebpackPlugin({
                template: './public/index.html',
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            })
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({filename: '[name].[contentHash].css'}), 
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ]
    }
});