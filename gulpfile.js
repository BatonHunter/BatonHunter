var gulp = require('gulp');
var uglify = require('gulp-uglify');
var gulpFilter = require('gulp-filter');
var mainBowerFiles = require('main-bower-files');
var runSequence = require('run-sequence');
var install = require('gulp-install');
var rimraf = require('rimraf');
var sass = require('gulp-sass');

var js_dest_path = 'assets/lib/js';
var css_dest_path = 'assets/lib/css';
var img_for_fancybox = 'assets/lib/css';
var font_path = 'assets/lib/fonts';

var jsFilter = gulpFilter('*.js');
var cssFilter = gulpFilter(['*.css', '*.css.map']);
var imgFilter = gulpFilter(['*.gif', '*.png']);
var fontFilter = gulpFilter(['*.eot', '*.svg', '*.ttf', '*.woff*']);

//Compile sass/scss To CSS
gulp.task('styles',function(){
    gulp.src('battleslot/style.{sass,scss}')
    .pipe(sass())
    .pipe(gulp.dest('battleslot'));
});


gulp.task('build', function(callback) {
    runSequence('clean', 'install', 'exportBowerFiles', callback);
});

gulp.task('install', function() {
    return gulp.src(['./bower.json', './package.json'])
        .pipe(install());
});

gulp.task('clean', function() {	
	rimraf("assets/lib", function(){});
    return rimraf("bower_components", function(){});

});

gulp.task('exportBowerFiles', function() {
    return gulp.src(mainBowerFiles())

    .pipe(jsFilter)
        .pipe(gulp.dest(js_dest_path))
        .pipe(jsFilter.restore())

    .pipe(cssFilter)
        .pipe(gulp.dest(css_dest_path))
        .pipe(jsFilter.restore())

    .pipe(imgFilter)
        .pipe(gulp.dest(img_for_fancybox))
        .pipe(imgFilter.restore())

    .pipe(fontFilter)
        .pipe(gulp.dest(font_path))
});