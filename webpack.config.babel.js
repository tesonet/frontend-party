import HardSourceWebpackPlugin from 'hard-source-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

const hardSourceWebpackPlugin = new HardSourceWebpackPlugin();

module.exports = {
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(scss)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('autoprefixer')
                                ];
                            }
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.(png)$/,
                loader: 'file-loader?name=[name].[ext]',
            },
        ]
    },
    plugins: [htmlWebpackPlugin, hardSourceWebpackPlugin]
};