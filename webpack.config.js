var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
module.exports = {
    entry: {
        app: [__dirname + '/src/index.js']
    },
    output: {
        path: __dirname + "/dist",
        publicPath: './',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: ["node_modules"],
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.png$/,
                loader: "url-loader?mimetype=image/png"
            },
            {
                test: /\.jpg$/,
                loader: "file-loader?name=images/image-[hash].[ext]"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Testio',
            filename: 'index.html',
            template: './src/index.ejs'
        }),
        // new webpack.optimize.UglifyJsPlugin()
    ]
};