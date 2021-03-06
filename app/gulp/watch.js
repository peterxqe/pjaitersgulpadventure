var gulp = require('gulp');
var sass = require('gulp-sass');
const watcher = require('gulp-watcher');

gulp.task('sass', function () {
    return gulp.src('assets/scss/**/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('assets/css/'));
});

gulp.task('sass:watch', function () {
    gulp.watch('assets/scss/**/*.scss', ['sass']);
});
