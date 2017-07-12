//**
//
// Define Modules up top...
//**

const gulp = require('gulp');
const requireDir = require('require-dir')('./gulp-tasks');
const runSequence = require('run-sequence').use(gulp);

//**
//
// All tasks here
//
//**

const sequence = callback => {
  runSequence('clean:build', 'assemble', 'images', 'sass', 'autoprefixer', 'wst', 'modernizr', 'compress', 'watch', callback);
};

gulp.task('default', callback => {
  sequence(callback);
});

gulp.task('build', callback => {
  sequence(callback);
});
