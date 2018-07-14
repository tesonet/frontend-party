import HardSourceWebpackPlugin from 'hard-source-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

const hardSourceWebpackPlugin = new HardSourceWebpackPlugin();

module.exports = {
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
        ]
    },
    plugins: [htmlWebpackPlugin, hardSourceWebpackPlugin]
};