var gulp = require('gulp');

gulp.task('scripts', function() {
  return gulp.src('src/*.js')
	.pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
	.pipe(gulp.dest('dist/assets/js'))
	;
});
