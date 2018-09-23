const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: path.resolve(__dirname, "src/index.js"),
	mode: "development",
	devtool: "cheap-module-source-map",
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
				use: [require.resolve("style-loader"), require.resolve("css-loader")],
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
		path: path.resolve(__dirname, "/"),
		publicPath: "/",
		filename: "bundle.js",
		chunkFilename: "[name].chunk.js",
	},
	devServer: {
		port: 5555,
		publicPath: "http://localhost:5555",
		hotOnly: true,
		historyApiFallback: true,
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({ template: path.resolve(__dirname, "public/index.html"), filename: "index.html", inject: true }),
	],
};
