# 一个全新的起点，fightingi!

## 遇到的问题：
### 1. gulp运行之后 bundle.js 为什么没有生成

MDZZ，运行 gulp build 就会生成bundle.js,应为default中没有写'browserify'方法

### 2. 如何实现更改了css之后页面同步刷新（js还是手动刷新吧，感觉在改代码的时候看到奔溃的页面整个人都会不好的）

使用browser-sync 结合gulp实现项目的自动刷新 

 - [Browser-Sync + Gulp中文文档](http://www.browsersync.cn/docs/gulp/)
 - [browser-sync 官方网站](https://www.browsersync.io/)

 ```
  gulp.task('styles', function() {
    return gulp.src('app/stylesheets/main.less')
      .pipe(plumber())
      .pipe(less())
      .pipe(autoprefixer())
      .pipe(gulpif(production, cssmin()))
      .pipe(gulp.dest('public/css'))
      .pipe(reload({ stream: true }));
  });

  gulp.task('serve', ['styles'], function() {
    browserSync.init({
      proxy: 'http://localhost:4001',
      port: 8080
    });

    gulp.watch('app/stylesheets/**/*.less', ['styles']);
  });
 ```

## 注意事项：

### 1. bootstrap/less/variables.less 中变量设置 => @icon-font-path: "../fonts/glyphicons"
### 2. font-awesome/less/variables.less 中变量设置 => @fa-font-paht: "../fonts/font-awesome"
上面的这种问题如何解决嗯？是通过让开发者下载后自己更改还是将该文件都上传到 github 上面？
