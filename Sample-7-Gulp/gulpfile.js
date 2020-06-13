

var gulp = require('gulp');
var concat = require('gulp-concat');
var dest = require('gulp-dest');
var uglify = require('gulp-uglify');
var obfuscate = require('gulp-obfuscate');

gulp.task('default', function () {
    gulp.src(['person-utility.js','auth.js','index.js'])
        .pipe(concat('bundle.js'))
        .pipe(obfuscate())
        .pipe(uglify())        
        .pipe(gulp.dest('./'));
});