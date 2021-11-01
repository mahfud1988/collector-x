const { src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const prefixCss = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');
const terser = require('gulp-terser');
var rename = require('gulp-rename');
var concat = require('gulp-concat');


// compile, prefix, and min css
function compilescss() {
    return src('assets/css/*.scss')
        .pipe(sass())
        .pipe(prefixCss('last 2 versions'))
        .pipe(dest('assets/css'))
};

// // minify js
// function minifyjs(){
//     return src([
//         'assets/javascript/*.js',
//         'assets/javascript/*.min.js',
//     ]) 
//         .pipe(terser())
//         .pipe(rename({ suffix: '.min' }))
//         .pipe(dest('assets/javascript'));
// }
// // minify css
// function minifycss(){
//     return src([
//         'assets/css/*.css',
//         'assets/css/*.min.css',
//     ]) 
//         .pipe(minify())
//         .pipe(rename({ suffix: '.min' }))
//         .pipe(dest('assets/css'));
// }

function packjs(){
    return src(([
        'node_modules/bootstrap/dist/js/bootstrap.js'
    ]))
        .pipe(concat('vendor.js'))
        .pipe(dest('assets/javascript'))
}

function packcss(){
    return src(([
        'node_modules/bootstrap/dist/css/bootstrap.css',
    ]))
        .pipe(concat('vendor.css'))
        .pipe(dest('assets/css'))
} 

function watchTask(){
    watch('assets/css/**/*.scss', compilescss);
}

exports.watch = watchTask;
exports.processCss = series(compilescss, packcss);
exports.processJs = series(packjs);