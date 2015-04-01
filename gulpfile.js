var gulp = require('gulp');
var jshint = require('gulp-jshint');
var rename = require('gulp-rename');
var uglify = require('gulp-uglifyjs');
var notify = require('gulp-notify');

gulp.task('buildjs', function () {
	return gulp.src('src/*.js')
		.pipe(jshint('.jshintrc'))
		.pipe(jshint.reporter('default'))
		.pipe(gulp.dest('gulp_out'))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(gulp.dest('gulp_out'))
		.pipe(notify({ message: 'buildjs task complete' }))
		;
});
