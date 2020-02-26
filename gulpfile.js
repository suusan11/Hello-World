const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const browserSync = require('browser-sync');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const mozjpeg = require('imagemin-mozjpeg');

//compile scss
gulp.task('sass', function () {
    return (
        //get scss files
        gulp.src('scss/**/*.scss')
            .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
            .pipe(sass({
                outputStyle: 'expanded',
            })
                .on('error', sass.logError))
            .pipe(postcss([autoprefixer({
                browser: ["last 2 versions", "ie >= 11", "Android >= 4"],
                cascade: false
            })]))
            .pipe(gulp.dest('./src/css'))
            .pipe(browserSync.reload({ stream: true }))
    );
});


//automatic reload
gulp.task('browserSyncTask', function () {
    browserSync.init({
        server: {
            baseDir: "./", // root
            index: "index.html"
        }
    })
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});


// watch to style.scss
gulp.task('default', gulp.series('browserSyncTask', function () {
    gulp.watch('./src/scss/**/*.scss', gulp.task('sass'));
    gulp.watch('./src/scss/**/*.scss', gulp.task('bs-reload'));
    gulp.watch('./src/js/*.js', gulp.task('bs-reload'));
    gulp.watch('**/*.html', ['html']);
}));


//persent of compress
// const imageminOption = [
//     pngquant({ quality: [70 - 85], }),
//     mozjpeg({ quality: 85 }),
//     imagemin.gifsicle({
//         interlaced: false,
//         optimizationLevel: 1,
//         colors: 256
//     }),
//     imagemin.jpegtran(),
//     imagemin.optipng(),
//     imagemin.svgo()
// ];

// image compress
gulp.task('imagemin', function () {
    return gulp
        .src('./src/img/*.{png,jpg,gif,svg}')
        .pipe(imagemin(imageminOption))
        .pipe(gulp.dest('./dist/img'));
});