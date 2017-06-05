 
const gulp=require('gulp');
var gulpLoadPlugins=require('gulp-load-plugins');
var lp=gulpLoadPlugins();
var files=require('gulp-file-include');
 

gulp.task('file', function () {
  gulp.src(['gulphtml/subpage-home.html'])
  .pipe(files({
      prefix:'@@',
      basepath:'./'
    }))
  .pipe(lp.rename({
      basename:'subpage-home',
      extname:'.html'
    }))
  .pipe(gulp.dest('html'));
});

gulp.task('file2', function () {
  gulp.src(['gulphtml/game-list.html'])
  .pipe(files({
      prefix:'@@',
      basepath:'./'
    }))
  .pipe(lp.rename({
      basename:'game-list',
      extname:'.html'
    }))
  .pipe(gulp.dest('html'));
});

gulp.task('file3', function () {
  gulp.src(['gulphtml/subpage-find.html'])
  .pipe(files({
      prefix:'@@',
      basepath:'./'
    }))
  .pipe(lp.rename({
      basename:'subpage-find',
      extname:'.html'
    }))
  .pipe(gulp.dest('html'));
});
 
