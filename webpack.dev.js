const path = require('path');
const config = require('./webpack.config');
const merge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(config, {
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [new HtmlWebpackPlugin({
        template: './public/index.html'
    })],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }
        ]
    }
});