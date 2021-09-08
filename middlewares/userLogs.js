const fs=require('fs');

 function userLogs(req,res,next){
fs.writeFileSync('userLogs.txt','Se ingreso en la pagina ' + require.url)

next()
}

module.exports=userLogs;