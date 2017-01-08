'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var imagemin = require('gul')
gulp.task('default', ['sass']);


gulp.task('sass', function () {
    return gulp.src('./resources/sass/**/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./resources/sass/**/*.scss', ['sass']);
});
