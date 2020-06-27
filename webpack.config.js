const HtmlWebPackPlugin = require(`html-webpack-plugin`);

module.exports = {
    devtool: `inline-source-map`,
    entry: `./src/index.js`,
    output: {
        path: `${__dirname}'/dist'`,
        publicPath: `/`,
        filename: `bundle.js`
    },
    devServer: {
        historyApiFallback: true
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [`babel-loader`, `eslint-loader`]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: `html-loader`
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [`style-loader`, `css-loader`, `sass-loader`]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: `./src/index.html`,
            filename: `./index.html`
        })
    ]
};
