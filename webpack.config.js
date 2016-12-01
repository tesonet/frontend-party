var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var purify = require("purifycss-webpack-plugin");

module.exports = {
	entry: {
		app: [__dirname + '/src/index.js']
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
		new webpack.HotModuleReplacementPlugin({
			reload: true
		}),
		new purify({
			basePath: __dirname,
			paths: [
				"src/templates/**/*.html",
				"src/js/**/*.html"
			]
		})
		// new webpack.optimize.UglifyJsPlugin()
	]
};