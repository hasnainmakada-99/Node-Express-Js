// Some important parameters for streams
// default 64kb
// last buffer - remainder
// highWaterMark - control size


// types of streams
// Readable − Stream which is used for read operation.
// Writable − Stream which is used for write operation.
// Duplex − Stream which can be used for both read and write operation.
// Transform − A type of duplex stream where the output is computed based on input.

const fs=require('fs');

// const stream=fs.createReadStream('./bigtextfile.txt', {encoding: 'utf-8'});

const stream=fs.createReadStream('./bigtextfile.txt', {highWaterMark: 90000});


stream.on('data', (result)=>{
    console.log('Result:  ', result);
})

stream.on('error', (error)=>{
    console.log('Error : ', error);
})
