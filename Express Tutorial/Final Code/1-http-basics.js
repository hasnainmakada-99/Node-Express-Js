const http=require('http');

const server=http.createServer((req, res)=>{
    const url=req.url;

    if(url==='/about'){
        res.writeHead(200, {'content-type': 'text/html'}); // used to define the status code and the content type which defined that how the content should be displayed in wheteher it should be in text/html or text/plain
        res.write("<h1>About Page</h1>");
        res.end();
    }
    else if(url==='/'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write("<h1>Home Page</h1>");
        res.end();
    }
    else{
        res.writeHead(200, {'content-type': 'text/html'});
        res.write("<h1>404 Page not found</h1>");
        res.end();
    }
});

server.listen(5000);    