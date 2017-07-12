const gulp = require('gulp');
const watch = require('gulp-watch');

//**
//
// Watch it babe
//
//**
gulp.task('watch', () => {
  gulp.watch(`source/assets/scss/**/*.scss`, ['sass', 'autoprefixer']);
  gulp.watch(`source/assets/js/**/*.js`, ['wst', 'compress']);
  gulp.watch(`source/assets/img/**/*`, ['images']);
  gulp.watch(`source/views/**/*.hbs`, ['assemble']);
});