var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('scripts', function() {
  return gulp.src('src/*.js')
	.pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
	.pipe(gulp.dest('gulp_out'))
	;
});
