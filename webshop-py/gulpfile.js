///**
// * Created by huyquan on 8/9/15.
// */
//var gulp = require('gulp');
//var browserSync = require('browser-sync');
//var reload = browserSync.reload;
//
//gulp.task('server', function(){
//   // Default task code
//    browserSync({
//        notify: false,
//        server: {
//         baseDir: '.'
//        }
//    });
//    gulp.watch(['*.html'], browserSync.reload);
//    gulp.watch(['js/*.js'], browserSync.reload);
//    gulp.watch(['css/*.css'], browserSync.reload);
//});
var gulp        = require('gulp');
var browserSync = require('browser-sync');

gulp.task('serve', function() {
    browserSync.init({
        proxy: "localhost:8000"
    });

    gulp.watch(['webshop/templates/layout/*.html'], browserSync.reload);
    gulp.watch(['webshop/templates/*.html'], browserSync.reload);
    gulp.watch(['webshop/static/app/scripts/webshop/*.js'], browserSync.reload);
    gulp.watch(['webshop/static/app/content/css/scss/*.css'], browserSync.reload);
});