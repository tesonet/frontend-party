const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.scss'],
        modules: [path.resolve('./node_modules'), path.resolve('./src')],
    },
    entry: ['@babel/polyfill', path.resolve(__dirname, 'src', 'index.js')],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: path.resolve(__dirname, './node_modules'),
                include: path.resolve(__dirname, 'src'),
                use: ['babel-loader', 'eslint-loader'],
            },
            {
                test: /\.js$/,
                include: [path.resolve(__dirname, './node_modules/ansi-regex/'), path.resolve(__dirname, './node_modules/strip-ansi/')],
                loader: 'babel-loader',
                options: { presets: ['@babel/preset-env'] },
            },
            {
                test: /\.scss$/i,
                include: path.resolve('src'),
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(jpe?g|png|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'assets/',
                        },
                    },
                ],
            },
        ],
    },
};
