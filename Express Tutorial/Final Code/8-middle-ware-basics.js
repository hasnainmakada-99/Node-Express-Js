const express=require('express');

const app=express();

const logger=(req, res, next)=>{
    const method=req.method;
    const url=req.url;
    const time=new Date().getFullYear();
    console.log("Method: ", method, " Url: ",url, "Time: ",time);
    next() // <--- posints to the next url we use
}

app.get('/', logger, (req, res)=>{
    res.send("Hello World Home page");
})

app.get('/about', logger, (req, res)=>{
    res.send("About Page");
})

app.listen(5000,()=>{
    console.log('Listening on server 5000....');
})