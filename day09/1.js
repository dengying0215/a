var fs=require('fs');
fs.readdir('./a',function(err,files){
  if(err){
    console.log(err);
  }else{
    console.log(files);
  }
  
})