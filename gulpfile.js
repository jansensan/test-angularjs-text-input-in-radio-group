//include gulp
var gulp = require('gulp');


// include plugins
var webserver = require('gulp-webserver');


// Serve
gulp.task('serve', function () {
  return gulp.src('./www')
    .pipe(webserver({
      host: 'localhost',
      port: 2400,
      open: true
    }));
});
