const gulp = require('gulp');
const $ = require("gulp-load-plugins")({ lazy: true });

const config = {
    bower: './bower_components',
    node: './node_modules',
    src: './Assets/src',
    dist: './assets/dist'
};

gulp.task('styles', ()=> {
    return gulp.src(`${config.src}/scss/app.scss`)
        .pipe($.sourcemaps.init())
        .pipe($.sass().on('error', $.sass.logError))
        .pipe($.autoprefixer(['last 2 version', 'ie 9']))
        .pipe($.csso())
        .pipe($.sourcemaps.write('./'))
        .pipe(gulp.dest(`${config.dist}/css/`))
        .pipe($.filter(['**/*.css']))  
});

gulp.task('watch', ()=> {
    $.watch(`${config.src}/scss/**/*.scss`, ()=> gulp.start('styles'));
});



gulp.task('default', ['styles']);