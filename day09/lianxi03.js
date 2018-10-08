var fs = require('fs');
 
//读取a文件夹中的所有内容
fs.readdir('./a',function(err,files){
  if(err){
    consoel.log(err);
    return ;
  }
  //读取成功
  console.log(files);
  //异步导致结果出问题
  /* for(var i=0;i<files.length;i++){
    console.log("外面:"+i);
    fs.stat('./a/'+files[i],function(err,stats){
      // console.log(err);
      console.log("里面:"+i);
      if(stats.isFile()){
        console.log(files[i]+"是文件");
      }else{
        console.log(files[i]+"是文件夹");
      }
    })
  } */
  //递归
  (function a(i){
    //先判定递归结束的条件
    if(i==files.length){//当i与数组长度一样,说明遍历结束了
      return ;
    }
    //遍历没有结束,检查判断每一个元素的状态
    fs.stat('./a/'+files[i],function(err,stats){
      if(err){
        console.log(err);
        return ;
      }
      if(stats.isFile()){
        console.log(files[i]+"是一个文件");
      }else{
        console.log(files[i]+"是一个文件夹");
      }
      a(++i);//自调
    });
  })(0)


});

