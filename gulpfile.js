var gulp = require('gulp');
var WebpackDevServer = require('webpack-dev-server');
var webpackStream = require('webpack-stream');
var webpack = require('webpack');

var config = require('./webpack.config.js');

gulp.task('default', ['build']);

gulp.task('serve', function () {
	config.entry.app.unshift("webpack-dev-server/client?http://0.0.0.0:80");
	var compiler = webpack(config);
	var server = new WebpackDevServer(compiler, {
		contentBase: "./dist",
		historyApiFallback: true,
		headers: {
			"Access-Control-Allow-Origin": "*"
		}
	});
	server.listen(80);
	console.log('[webpack listening] http://localhost/');
});

gulp.task('build', function () {
	return gulp.src('./src/index.js')
		.pipe(webpackStream(config))
		.pipe(gulp.dest('dist'));
});
