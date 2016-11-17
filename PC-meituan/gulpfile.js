var gulp = require('gulp'),
	less = require('gulp-less'),
	rename = require('gulp-rename'),
	minifycss = require('gulp-minify-css'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat');
	
	gulp.task('meituancss',function(){
		gulp.src('meituan/src/css/meituan.less')
		.pipe(less())
		.pipe(gulp.dest('meituan/dist/css'))
		.pipe(rename({suffix:'.min'}))
		.pipe(minifycss())
		.pipe(gulp.dest('meituan/dist/css'));
	})
	gulp.task('alljs',function(){
		gulp.src(['meituan/src/js/*.js'])
		.pipe(concat('all.js'))
		.pipe(gulp.dest('meituan/dist/js'))
		.pipe(rename({suffix:'.min'}))
		.pipe(uglify())
		.pipe(gulp.dest('meituan/dist/js'));
	})
	gulp.task('index',function(){
		gulp.src('meituan/src/*.html')
		.pipe(gulp.dest('meituan/dist'));
	})
	gulp.task('moveimg',function(){
		gulp.src(['meituan/src/img/*'])
		.pipe(gulp.dest('meituan/dist/img'))
	})
	gulp.task('watch',['meituancss','alljs','index'],function(){
		gulp.watch(['meituan/src/css/meituan.less','meituan/src/js/*.js','meituan/src/index.html','meituan/src/img/*'],['meituancss','alljs','index','moveimg'])
	})
