const gulp = require('gulp');
const webpack = require('webpack-stream');

//**
//
// Webpack
//
//**
gulp.task('wst', () => {
  return gulp.src('source/assets/js/main.js')
    .pipe(webpack({
      output: {
        filename: 'bundle.js',
      },
      module: {
        loaders: [
          {
            enforce: 'pre',
            test: /\.js$/,
            exclude: [/node_modules/, /libs/],
            loader: 'eslint-loader'
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
              presets: ['es2015']
            }
          },
        ],
      },
    }))
    .pipe(gulp.dest('build/assets/js'));
});
