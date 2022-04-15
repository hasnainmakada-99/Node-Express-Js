const http=require('http');

const server=http.createServer();

// using the events emitter api

server.on('request', (req, res)=>{
    res.end('welcome');
})

server.listen(5000, ()=>{
    console.log('server listening on port 5000...');
})

// emits request event
// subcribe to it / listen for it / respond to it