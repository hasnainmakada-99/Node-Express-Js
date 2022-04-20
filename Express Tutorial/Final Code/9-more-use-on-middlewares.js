const express=require('express');
const app=express();
const logger=require('./public/logger');
const authorize=require('./public/authorize');
app.use([authorize, logger]); /// <--- by putting the loggers in an array we can use multiple loggers at a time

app.get('/', (req,res)=>{
    res.send("Hello World");
})

app.listen(5000, ()=>{
    console.log('Listening on port 5000....');
})
