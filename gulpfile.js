var gulp = require('gulp');
var clean = require('gulp-clean');
var webpack = require('webpack');
var webpackStream = require('webpack-stream');
var WebpackDevServer = require('webpack-dev-server');

var config = require('./webpack.config.js');

var defaults = {
	port: 80
};

gulp.task('default', ['build']);

gulp.task('serve', function () {
	config.entry.app.unshift("webpack-dev-server/client?http://0.0.0.0:80");
	var compiler = webpack(config);
	compiler.plugin("done",function(){
		setTimeout(function(){
			console.log('[webpack listening] http://localhost:' + defaults.port);
		},0);
	});
	var server = new WebpackDevServer(compiler, {
		contentBase: "./dist",
		historyApiFallback: true,
		stats: {
			colors: true
		}
	});
	server.listen(defaults.port);
});

gulp.task('build', ['clean'], function () {
	return gulp.src('./src/index.js')
		.pipe(webpackStream(config))
		.pipe(gulp.dest('dist'));
});

gulp.task('clean', function(){
	gulp.src('dist', {read: false})
		.pipe(clean());
});