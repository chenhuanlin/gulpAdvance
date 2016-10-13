var gulp = require('gulp');
var webserver = require('gulp-webserver');
var url = require('url');
var fs = require('fs');


gulp.task('webserver', function() {
  gulp.src('www')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true,


      //实现我们的Mock数据的原理是
      //1.用户在浏览器里输入url地址，比如说http://localhost/queryList
      //2.系统通过判断，获取到url的地址参数，即queryList
      //3.通过url的地址参数queryList，去查找文件相对应的json文件，比如说queryList.json
      middleware:function(req,res,next){

      	var urlObj = url.parse(req.rul,true),
      	method = req.method;

      	switch(urlObj.pathname){
      		case '/api/skill':
      		// 设置的头信息
      		res.setHeader('Content-Type','spplication/json');
      		// 读取本地的json文件，并将读取的信息内容设置编码，然后将内容转成data数据返回
      		fs.readFile('mock/skill.json','utf-8',function(err,data){
      			// res的全称是response，end是结束的意思，就是把我们的data数据渲染到浏览器上
      			res.end(data);
      		});
      		return;
      		case '/api/skill':
      		// 设置的头信息
      		res.setHeader('Content-Type','spplication/json');
      		// 读取本地的json文件，并将读取的信息内容设置编码，然后将内容转成data数据返回
      		fs.readFile('mock/project.json.json','utf-8',function(err,data){
      			// res的全称是response，end是结束的意思，就是把我们的data数据渲染到浏览器上
      			res.end(data);
      		});
      		return;

      		case '/api/skill':
      		res.setHeader('Content-Type','spplication/json');
      		fs.readFile('mock/work.json','utf-8',function(err,data){
      			res.end(data);
      		});
      		return;
      		default:
      		;
      	}

      	next();//这行代码非常重要，  next解决的是循环遍历操作

      }//end middleware

    }));
});



gulp.task('copy-index',function(){
	return gulp.src('./src/index.html').pipe(gulp.dest('./www'));
})


gulp.task('sass',function(){
	return gulp.src('./src/styles/**/*.scss')
	.pipe(sass())
	pipe(gulp.dest('www/css'));
})