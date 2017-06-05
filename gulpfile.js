 
const gulp=require('gulp');
var gulpLoadPlugins=require('gulp-load-plugins');
var lp=gulpLoadPlugins();
var files=require('gulp-file-include');
 

gulp.task('file', function () {
  gulp.src(['gulphtml/s-home.html'])
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


 
