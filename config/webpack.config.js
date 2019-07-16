const { join } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

const { env } = process;

const mode = env.NODE_ENV || 'development';
const hotReload = mode === 'development';

const config = {
    mode: mode === 'build' ? 'production' : 'development',
    devtool: mode === 'build' ? 'nosources-source-map' : 'eval-source-map',
    bail: mode === 'build',
    devServer: {
        historyApiFallback: true,
        overlay: {
            errors: true,
            warnings: false
        }
    },

    entry: ['@babel/polyfill', join(__dirname, '../src/index.jsx')],

    output: {
        path: join(__dirname, '../build'),
        filename: hotReload ? '[name].[hash].js' : '[name].[chunkhash].js',
        publicPath: ''
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: hotReload ? ['react-hot-loader/babel', '@babel/plugin-proposal-class-properties'] : [
                            '@babel/plugin-transform-object-assign',
                            '@babel/plugin-proposal-object-rest-spread',
                            '@babel/plugin-proposal-class-properties',
                            '@babel/plugin-syntax-dynamic-import'
                        ],
                        cacheDirectory: true
                    }
                }
            },
            {
                test: /\.jsx?$/,
                loader: 'source-map-loader',
                enforce: 'pre',
                exclude: [/node_modules[/\\]/]
            },
            {
                test: /\.(less|css)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: {
                                localIdentName: 'ui-[name]-[local]'
                            }
                        }
                    },
                    {
                        loader: 'less-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [autoprefixer({ browsers: ['last 2 versions, ie >= 11'] })]
                        }
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                loader: 'file-loader',
                options: { name: 'assets/[name].[ext]' }
            },
            {
                test: /\.(woff2?|svg|[ot]tf|eot)$/,
                loader: 'url-loader',
                options: { limit: 10000, name: 'fonts/[name].[ext]' }
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },

    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin()
        ],

        runtimeChunk: {
            name: entrypoint => `runtime-${entrypoint.name}`
        },

        splitChunks: {
            chunks: 'all',
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '-',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    },

    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash:20].css'
        }),
        new HtmlWebpackPlugin({
            template: join(__dirname, '../src/index.html'),
            inject: false
        })
    ]
};

module.exports = config;
