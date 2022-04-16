const http=require('http');

const fs=require('fs');

const homepage1=fs.readFileSync('./navbar-app/index.html');

const server=http.createServer((req, res)=>{

        if(req.url==='/'){
                res.writeHead(200, {'content-type': 'text/html'});
                res.write(homepage1);
                res.end()
        }
        else{
                res.writeHead(200, {'content-type': 'text/html'});
                res.write('Hello world');
                res.end()      
        }
})

server.listen(8080);