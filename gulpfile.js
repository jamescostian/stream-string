var gulp = require('gulp')
var jshint = require('gulp-jshint')
var mocha = require('gulp-mocha')

gulp.task('lint', function () {
	return gulp.src(['index.js', 'test.js', 'gulpfile.js', 'package.json'])
		.pipe(jshint())
})

gulp.task('test', function () {
	return gulp.src('test.js', {read: false})
		.pipe(mocha({ui: 'bdd'}))
})

gulp.task('default', ['lint', 'test'])
