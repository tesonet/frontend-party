const path = require('path');
module.exports = {
    entry: './src/react/index.jsx',
    output: {
        path: path.resolve('./src/express/public/static/build/'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(png|jpg|gif}|svg)$/, loader: 'url-loader', options: {limit: 15000, name: 'assets/images/[hash].[ext]'}}
        ]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: '/',
        hot: true
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    }
}