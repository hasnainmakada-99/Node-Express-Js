const http=require('http');

const server=http.createServer((req, res)=>{
    console.log('Request Event');
    res.end("Hello World");
})

server.listen(5000, ()=>{
    console.log('listening server on port 5000...'); // according to async pattern in event loop it will first listen to the server and then it will listen to the request and response
})