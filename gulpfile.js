var gulp = require('gulp');
var del = require('del');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var maps = require('gulp-sourcemaps');
var watch = require('gulp-watch');

// minify scripts 
gulp.task('minify-scripts', function() {
    return gulp.src('./src/scripts/index.js')
        .pipe(uglify())
        .pipe(rename('index.min.js'))
        .pipe(gulp.dest('./dist/scripts'));
});

// minify CSS
gulp.task('minify-css', function() {
    return gulp.src('./src/styles/style.css')
        .pipe(cleanCSS())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('./dist/styles'));
});

// watch files
gulp.task('watch', function() {
   gulp.watch('./src/scripts/*.js', './src/styles/*.css'); 
});

// clean
gulp.task('clean', function() {
    del('./dist')
});

// build
gulp.task('build', ['minify-scripts', 'minify-css']);

gulp.task('default', ['clean'], function() {
   gulp.start('build'); 
});