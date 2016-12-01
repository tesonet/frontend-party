var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
	entry: {
		app: [
			'webpack/hot/dev-server',
			__dirname + '/src/index.js'
		]
	},
	output: {
		path: __dirname + "/dist",
		publicPath: './',
		filename: '[hash].js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ["babel-loader?presets[]=es2015", "eslint-loader"],
				exclude: ["node_modules"]
			},
			{
				test: /\.scss$/,
				loaders: ["style-loader", "css-loader", "sass-loader"]
			},
			{
				test: /\.css$/,
				loaders: ['style-loader', 'css-loader']
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
		new webpack.HotModuleReplacementPlugin({
			reload: true
		}),
		new webpack.optimize.UglifyJsPlugin()
	],
	devServer: {
		hot: true
	}
};