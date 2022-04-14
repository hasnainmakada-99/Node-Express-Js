const http= require('http');
console.log('Starting noww.....');
const server=http.createServer((req, res)=>{
    if(req.url==='/'){
        res.end('You are in home page');
    }
    else if(req.url==='/about'){
        res.end('You are in about page');
    }
    else{
        res.end(`<h1>Oops You are in error page</h1>`)
    }
    
    //res.write('error world');
    //res.end(); // required to start the server in the browser while testing
})

server.listen(5000);