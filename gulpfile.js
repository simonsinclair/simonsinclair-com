const gulp = require('gulp');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', () => gulp.src('./src/sass/**/*.scss')
  .pipe(
    sass({ outputStyle: 'compressed' })
      .on('error', sass.logError),
  )
  .pipe(gulp.dest('./src/site/_includes/css')));

gulp.task('sass:watch', () => {
  gulp.watch('./src/sass/**/*.scss', gulp.series('sass'));
});
