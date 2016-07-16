var gulp = require('gulp'),
    combiner = require('stream-combiner2'),
    typescript = require('gulp-typescript'),
    minifyJs = require('gulp-minify'),
    rename = require('gulp-rename'),
    gutil = require('gulp-util');
    webserver = require('gulp-webserver'),
    jade = require('gulp-jade');

gulp.task('serv', function() {
  gulp.src('./')
    .pipe(webserver({
      open: true,
      fallback: 'index.html'
    }));
});

gulp.task('jade',function(){
  gulp.src('./src/views/index.jade')
    .pipe(jade())
    .pipe(gulp.dest('./'));
});

gulp.task('typescript', function() {
  var combined = combiner.obj([
    gulp.src('./src/js/tinyvector.ts'),
    typescript(),
    gulp.dest('./dist/js/'),
    minifyJs({
      ext : {
        min: '.min.js'
      },
      preserveComments: 'some'
    }),
    //rename({extname: '.min.js'}),
    gulp.dest('./dist/js/')
  ]);
  combined.on( 'error', gutil.log);
  return combined;
});

gulp.task( 'watch', function() {
  gulp.watch('./src/js/tinyvector.ts', ['typescript']);
  gulp.watch('./src/views/index.jade', ['jade']);
  return;
});
