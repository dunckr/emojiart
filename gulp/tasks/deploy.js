var gulp = require('gulp');
var deploy = require('gulp-gh-pages');

gulp.task('deploy', ['production'], function() {
  return gulp.src('./build/**/*')
    .pipe(deploy());
});
