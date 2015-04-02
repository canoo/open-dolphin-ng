// package.json: alternative to gulp-uglify: "gulp-uglifyjs": "0.6.1",

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var rename = require('gulp-rename');
var uglify = require('gulp-uglifyjs');
var sourcemaps = require('gulp-sourcemaps');
var notify = require('gulp-notify');

gulp.task('buildjs', function () {
	return gulp.src('src/*.js')
		//.pipe(jshint('.jshintrc'))
		//.pipe(jshint.reporter('default'))
		.pipe(sourcemaps.init({debug:true}))
		.pipe(gulp.dest('gulp_out'))
		//.pipe(rename({suffix: '.min'}))
		//.pipe(uglify())
		.pipe(sourcemaps.write('.', {sourceRoot: 'src'}))
		.pipe(gulp.dest('gulp_out'))
		//.pipe(notify({ message: 'buildjs task complete' }))
		;
});

