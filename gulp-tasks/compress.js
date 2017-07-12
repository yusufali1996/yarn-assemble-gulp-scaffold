const gulp = require('gulp');
const uglify = require('gulp-uglify');
const pump = require('pump');

//**
//
// Compress [uglify]
//
//**
gulp.task('compress', cb => {
  pump([
      gulp.src('build/assets/js/**/*.js'),
      uglify(),
      gulp.dest('build/assets/js')
    ],
    cb
  );
});
