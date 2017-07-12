const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const imageminGuetzli = require('imagemin-guetzli');
const cache = require('gulp-cache');
//**
//
// General Load Task / options
//
//**

gulp.task('images', () => {
  return gulp.src('source/assets/img/**/*')
    .pipe(imagemin([imageminGuetzli({
      quality: 85
    })]))
    .pipe(gulp.dest('build/assets/images'));
});
