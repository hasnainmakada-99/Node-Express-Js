const express= require('express');

const app=express();

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
const fs=require('fs');
const homepage=fs.readFileSync('./navbar-app/index.html')

app.get('/' ,(req, res)=>{
    res.status(200);
    //res.send() // used to print/download the text in express
    res.writeHead(200, {'content-type': 'text/html'});

    res.write(homepage);
    res.end()
})

app.get('/about', (req,  res)=>{
    res.status(200);
    res.send("About Page");
})

app.all('*', (req, res)=>{ // <-- * used to indicate if it redirects to any file
        res.status(404);
        res.send("Error 404 Page Not FOUND")
});

app.listen(8080);