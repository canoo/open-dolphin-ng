// package.json: alternative to gulp-uglify: "gulp-uglifyjs": "0.6.1",

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var rename = require('gulp-rename');
var uglify = require('gulp-uglifyjs');
var sourcemaps = require('gulp-sourcemaps');
var notify = require('gulp-notify');
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('buildjs', function () {
	return gulp.src('src/*.js')
		.pipe(jshint('.jshintrc'))
		.pipe(jshint.reporter('default'))
		.pipe(gulp.dest('gulp_out'))
		.pipe(ngAnnotate())
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(gulp.dest('gulp_out'))
		//.pipe(notify({ message: 'buildjs task complete' }))
		;
});

