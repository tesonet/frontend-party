const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
    const isProduction = argv && argv.mode === 'production';

    return {
        context: `${__dirname}/src`,
        entry: {
            app: './index.js',
        },
        output: {
            filename: '[name].[hash].bundle.js',
            path: `${__dirname}/dist`,
            publicPath: '/',
        },
        target: 'web',
        devtool: isProduction ? 'eval' : 'source-map', // TODO
        resolve: {
            extensions: ['.js', '.jsx'],
            alias: {
                app: `${__dirname}/src/app`,
            },
        },
        plugins: [
            new CleanWebpackPlugin('./dist'),
            new MiniCssExtractPlugin({
                filename: '[name].[contenthash].bundle.css',
            }),
            new HtmlWebpackPlugin({
                template: 'index.html',
            }),
        ],
        optimization: {
            runtimeChunk: 'single',
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all',
                    },
                },
            },
        },
        devServer: {
            historyApiFallback: true,
        },
        module: {
            rules: [
                {
                    test: /\.js|\.jsx$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                    },
                },
                {
                    test: /\.css$/,
                    include: /bootstrap/,
                    use: [
                        'style-loader',
                        'css-loader',
                    ],
                },
                {
                    test: /\.scss$/,
                    exclude: /node_modules/,
                    use: [
                        isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                        {
                            loader: 'css-loader',
                            query: {
                                modules: true,
                                sourceMap: !isProduction,
                                localIdentName: isProduction ? '[hash:base64:5]' : '[local]__[hash:base64:5]',
                            },
                        },
                        'sass-loader',
                    ],
                },
                {
                    test: /\.svg$/,
                    issuer: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: [
                        'babel-loader',
                        {
                            loader: 'react-svg-loader',
                            options: {
                                svgo: {
                                    plugins: [
                                        {
                                            cleanupIDs: {
                                                prefix: {
                                                    toString() {
                                                        this.counter = this.counter || 0;

                                                        return `id-${this.counter + 1}`;
                                                    },
                                                },
                                            },
                                        },
                                    ],
                                },
                            },
                        },
                    ],
                },
            ],
        },
    };
};
