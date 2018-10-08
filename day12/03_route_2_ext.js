//路由文件
var express=require('express');
//创建路由对象
var route=express.Router();

//使用路由处理请求
route.get('/1',function(req,res){
  res.send("这是student的/请求");
});

route.get('/a',function(req,res){
  res.send("这是student的/a请求");
});

route.get('/b',function(req,res){
  res.send("这是student的/b请求");
});

route.get('/2',function(req,res){
  res.send("这是teacher的/请求");
});

route.get('/c',function(req,res){
  res.send("这是teacher的/c请求");
});

route.get('/d',function(req,res){
  res.send("这是teacher的/d请求");
});


//暴露路由对象
module.exports=route;
