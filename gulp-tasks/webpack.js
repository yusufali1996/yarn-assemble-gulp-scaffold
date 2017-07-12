const gulp = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const sourcemaps = require('gulp-sourcemaps');
const gulpIf = require('gulp-if');
const uglify = require('gulp-uglify');
const gulpVars = require('require-dir')('../gulp-vars');
const isProduction = gulpVars.vars();

//**
//
// Webpack
//
//**
gulp.task('webpack', () => {
  var plugins = [];
  if(isProduction == true){
    plugins = [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      })
    ]
  }

  return gulp.src('source/assets/js/main.js')
    .pipe(sourcemaps.init())
    .pipe(
      webpackStream({
        output: {
          filename: 'bundle.js',
        },
        watch: false,
        plugins: plugins,
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
      }, webpack)
    )
    .pipe(gulpIf(isProduction, uglify() ))
    .pipe(gulpIf(!isProduction, sourcemaps.write()))
    .pipe(gulp.dest('build/assets/js'));
});
