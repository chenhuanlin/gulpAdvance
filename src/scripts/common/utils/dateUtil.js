var DateUtil = {
	getDate:function(){
		return new Date().toLocaleDateString();//根据本地时间把DAte对象的日期转换为字符串
	}
}
module.exports = DateUtil;
console.log("DateUtil is required");






