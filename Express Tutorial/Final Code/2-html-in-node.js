const fs=require('fs');

const homepage=fs.readFileSync('./sample-file.html');
const http=require('http');

const server=http.createServer((req, res)=>{
    res.writeHead(200, {'content-type': 'text/html'});
    res.write(homepage); // the page will be  printed on the server
    res.end();
})

server.listen(5000);