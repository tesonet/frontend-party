
require('es6-promise').polyfill();

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    merge = require('merge-stream'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer');

var ap_options = {
    browsers: [
        'last 4 Chrome versions',
        'last 4 Firefox versions',
        'last 4 Edge versions',
        'ie >= 9',
        '> 1.49%',
        'not ie <= 8'
    ],
};

gulp.task('scss', function () {
    var app_styles = gulp.src('src/css/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({ outputStyle: 'expanded' })) // Options: nested, expanded, compact, compressed
        .pipe(postcss([
            autoprefixer(ap_options),
        ]))
        .pipe(gulp.dest('src/css/dist'));

        var bootstrap = gulp.src('src/css/bootstrap/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(sass({ outputStyle: 'expanded' })) // Options: nested, expanded, compact, compressed
            .pipe(postcss([
                autoprefixer(ap_options),
            ]))
            .pipe(gulp.dest('src/css/dist'));

    return merge(bootstrap, app_styles);
});

gulp.task('watch', function () {
    gulp.watch('src/css/**/*.scss', ['scss']);
});

gulp.task('default', ['watch'], function () {
  return gutil.log('Gulp is running!')
});
