const express=require('express');
const app=express();
const morgan=require('morgan');

app.use(morgan('tiny')); // we can use morgan also for logger operations

app.get('/', (req, res)=>{
    res.send("Home Page");
})


app.listen(5000, ()=>{
    console.log('listening....');
})