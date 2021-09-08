const fs=require('fs');

 function userLogs(req,res,next){
fs.writeFileSync('/logs/userLogs.txt','Se ingreso en la pagina ' + require.url)

next()
}

module.exports=userLogs;