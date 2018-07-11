var gulp = require('gulp');
// 获取 uglify 模块（用于压缩 JS）
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
// 在命令行使用 gulp script 启动此任务
gulp.task('jscompress', function() {
	// 1. 找到文件
	return gulp.src('js/*.js')
		// 2. 压缩文件
		.pipe(uglify())
		// 3. 另存压缩后的文件
		.pipe(gulp.dest('dist/js'));
});

// 压缩 css 文件
// 在命令行使用 gulp csscompress 启动此任务
gulp.task('csscompress', function() {
	// 1. 找到文件
	return gulp.src('css/*.css')
		// 2. 压缩文件
		.pipe(cleanCSS())
		// 3. 另存压缩后的文件
		.pipe(gulp.dest('dist/css'));
});
gulp.task('min', function() {
  return gulp.src('./mdd/**/*')
    .pipe(imagemin({
      progressive: true,
      use: [pngquant({
        quality: '65-80'
      })]
    }))
    .pipe(gulp.dest('dist/min'));
})
gulp.task('auto', function () {
    // 监听文件修改，当文件被修改则执行 script 任务
    gulp.watch('js/*.js', ['jscompress']);
    gulp.watch('css/*.css', ['csscompress']);
    gulp.watch('./mdd/**/*', ['min']);
});
gulp.task('default', ['auto']);