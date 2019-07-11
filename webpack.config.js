const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.ejs',
        }),
    ],
    optimization: {
        minimizer: [
            new TerserPlugin({
                parallel: true,
            }),
        ],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loaders: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(jpe?g|png)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
        ],
    },
    devServer: {
        compress: true,
        port: 3001,
        inline: true,
        hot: true,
        open: true,
        historyApiFallback: true,
    },
};
