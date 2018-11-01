var gulp = require('gulp');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');

// File paths
var SCRIPTS_PATH = 'public/scripts/**/*.js';

// Styles
gulp.task('styles', function() {
    console.log('starting styles task');
});

// Javascript
gulp.task('scripts', function() {
    console.log('starting scripts task');

    return gulp.src(SCRIPTS_PATH)
        .pipe(uglify())
        .pipe(gulp.dest('public/dist'))
        .pipe(livereload());
});

// Imagess
gulp.task('images', function() {
    console.log('starting images task');
});

gulp.task('default', function() {
    console.log('starting default task');
});

gulp.task('watch', function() {
    console.log('starting watch task');
    require('./server.js');
    livereload.listen();
    gulp.watch(SCRIPTS_PATH, ['scripts']);
});