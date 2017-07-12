const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

//**
//
// Autoprefixer, fix them buggy buggs.
//
//**
gulp.task('autoprefixer', () => {
  return gulp.src('build/assets/css/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/assets/css'));
});
