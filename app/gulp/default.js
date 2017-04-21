var gulp = require('gulp');
gulp.task('default', ['sass'], function () {
    gulp.start('connect','sass:watch');
});
