const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
	entry: path.resolve(__dirname, "src/index.js"),
	mode: "production",
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: true,
			}),
			new OptimizeCSSAssetsPlugin({}),
		],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				loader: "babel-loader",
				options: { presets: ["@babel/preset-env"] },
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, require.resolve("css-loader")],
			},
			{
				test: /\.scss$/,
				use: [
					require.resolve("style-loader"),
					{
						loader: require.resolve("css-loader"),
						options: {
							importLoaders: 1,
							modules: true,
							localIdentName: "[name]_[local]_[hash:base64:5]",
						},
					},
					require.resolve("sass-loader"),
				],
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
					require.resolve("file-loader"),
					{
						loader: require.resolve("image-webpack-loader"),
						options: {
							disable: true,
						},
					},
				],
			},
		],
	},
	resolve: { extensions: ["*", ".js", ".jsx"] },
	output: {
		path: path.resolve(__dirname, "build"),
		publicPath: "/build",
		filename: "bundle.js",
		chunkFilename: "[name].chunk.js",
	},
	plugins: [
		new HtmlWebpackPlugin({ template: path.resolve(__dirname, "public/index.html"), filename: "index.html", inject: true }),
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css",
		}),
	],
};
