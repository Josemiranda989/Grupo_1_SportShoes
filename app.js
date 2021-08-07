const express=require('express');
const { dirname } = require('path');
const app=express ();
const path=require('path');

app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/index.html'))
});

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/login.html'))
});

app.get('/register',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/register.html'))
});


app.listen(3000,()=>{

    console.log('servidor funcionando');
});