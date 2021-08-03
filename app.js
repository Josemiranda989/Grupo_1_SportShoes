const express=require('express');
const { dirname } = require('path');
const app=express ();
const path=require('path');

app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/index.html'))
});



app.listen(3002,()=>{

    console.log('servidor funcionando');
});