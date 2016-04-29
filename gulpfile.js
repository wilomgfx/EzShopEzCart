var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('src/styles/**/*.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('./app/css/'));
});

//Watch task
gulp.task('default',function() {
    gulp.watch('src/styles/**/*.scss',['styles']);
});
