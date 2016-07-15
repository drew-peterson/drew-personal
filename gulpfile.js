'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');
var rename = require('gulp-rename');
var maps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var flatten = require('gulp-flatten');

// JS
var srcFiles = ['app/App.js', 'app/src/**/*js'];
gulp.task('js', function () { 
  gulp.src(srcFiles) 
  	.pipe(maps.init())
    .pipe(concat('App.js'))
    // .pipe(uglify({mangle: false}))
    .pipe(rename({suffix: '.min'}))
    .pipe(maps.write('./')) 
    .pipe(gulp.dest('public/src'))
    .pipe(livereload());
});


// SCSS
gulp.task('styles', function(){
	return gulp.src('app/application.scss')
	.pipe(maps.init())
	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	.pipe(autoprefixer({
		browsers: ['last 3 versions'],
		cascade: false
	}))
	.pipe(maps.write('./'))
	.pipe(gulp.dest('public/css'))
	.pipe(livereload());
});

// HTML
gulp.task('html', function(){
	return gulp.src('app/src/components/**/*.html')
	.pipe(flatten())
	.pipe(rename({suffix: '.public'}))
	.pipe(gulp.dest('public/views'))
})


// WATCH
gulp.task('watchFiles', function(){
	livereload.listen();
	gulp.watch(['app/src/**/*.js', 'app/App.js'], ['js']); // watch js files
	gulp.watch('app/styles/**/*.scss', ['styles']); // watch scss files
	gulp.watch('app/src/**/*.html', ['html']); // watch html component files
})

// SERVE
gulp.task('serve', ['watchFiles']);