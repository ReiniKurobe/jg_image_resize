var gulp = require('gulp');
var imageResize = require('gulp-image-resize');
//var imggeSize = require('image-size');

gulp.task('thumb-w', function () {
  return gulp.src('src/**/**.jpg')
    .pipe(imageResize({
      width : 300,
      height : 200,
      crop : true,
      upscale : false
    }))
    .pipe(gulp.dest('dist/thumb'));
});

gulp.task('photo-w', function () {
  return gulp.src('src/**/**.jpg')
    .pipe(imageResize({
      width : 800,
      height : 532,
      crop : true,
      upscale : false
    }))
    .pipe(gulp.dest('dist/photo'));
});

gulp.task('thumb-v', function () {
  return gulp.src('src/**/**.jpg')
    .pipe(imageResize({
      width : 133,
      height : 200,
      crop : true,
      upscale : false
    }))
    .pipe(gulp.dest('dist/thumb'));
});

gulp.task('photo-v', function () {
  return gulp.src('src/**/**.jpg')
    .pipe(imageResize({
      width : 355,
      height : 533,
      crop : true,
      upscale : false
    }))
    .pipe(gulp.dest('dist/photo'));
});

gulp.task('wid', gulp.series('thumb-w', 'photo-w'));
gulp.task('ver', gulp.series('thumb-v', 'photo-v'));
