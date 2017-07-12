const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const extname = require('gulp-extname');
const assemble = require('assemble');
const app = assemble();

app.partials('source/views/partials/*.hbs');
app.layouts('source/views/layouts/*.hbs');
app.pages('source/views/pages/*.hbs');
app.option('layout', 'layout.hbs');

gulp.task('assemble', () => {
  return app.toStream('pages')
    .pipe(app.renderFile())
    .pipe(htmlmin())
    .pipe(extname())
    .pipe(app.dest('build'));
});
