var fs=require('fs');
var start=new Date();
// console.log(1);
/* fs.readFile('./day09.txt','utf-8',function(err,data){
  console.log(2);
  if(err){
    console.log(err);
  }else{
    console.log(data);
  }
 })*/
// console.log(3);
//同步的读取文件
var result=fs.readFileSync('./lianxi02.js');
var end=new Date();

console.log('程序执行一共花了'+(end-start)+'ms');