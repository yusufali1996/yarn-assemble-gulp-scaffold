var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var sourcemaps = require('gulp-sourcemaps');

//**
//
// Sassy Sass
//
//**
gulp.task('sass', () => {
  return gulp.src('source/assets/scss/**/*.scss')
    .pipe(sassGlob())
    .pipe(sass({
      includePaths: ['node_modules/foundation-sites/scss'],
      outputStyle: 'compressed',
    }).on('error', sass.logError))
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/assets/css'));
});
