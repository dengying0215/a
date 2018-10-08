require('./b.js');

console.log('我是a.js');
var a=12;
//console.log('a.js中属性a的值是:'+a);
function b(){
  console.log('我是a.js的方法b');
}
//b();
//exports.暴露的名称=定义的名称
//暴露的名称是给外部文件使用的
//定义的名称是给内部自己定义的变量名或方法名
exports.a=a;
exports.b=b;