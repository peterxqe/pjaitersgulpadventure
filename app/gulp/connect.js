var connect = require('gulp-connect');
var gulp = require('gulp');
gulp.task('connect', function() {
    connect.server({
        port: 8888
    });
});
