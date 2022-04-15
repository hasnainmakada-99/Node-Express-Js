// What is pipe function in node js
// Pipes can be used to connect multiple streams together. One of the most common example is to pipe the read and write stream together for the transfer of data from one file to the other. Node. js is often also tagged as an event driven framework, and it's very easy to define events in Node.

const fs=require('fs');

const stream=fs.createReadStream('./bigtextfile.txt', 'utf-8');

const http=require('http');
// const { findKey } = require('lodash');

http.createServer((req, res)=>{
    // const text=fs.readFileSync('./bigtextfile.txt', 'utf-8');
    // res.end(text);
    const stream=fs.createReadStream('./bigtextfile.txt', 'utf-8'); //  the readStream function has to be declare inside the create server function
    stream.on('open', ()=>{
        stream.pipe(res);
    })

    stream.on('error', (err)=>{
        res.end(err);
    })

}).listen(5000);
