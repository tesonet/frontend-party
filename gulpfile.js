var gulp = require('gulp');
var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');

gulp.task('default', function() {
    var config = require('./webpack.config.js');
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
});