const express= require('express');
const path=require('path'); // require the path module
const app=express();

app.use(express.static('./public')); // the use method is used o statically add the files which we are going to repeatedly use in the server

// app.get('/', (req, res)=>{
// and there is also and alternate way to do it
//     res.sendFile(path.resolve(__dirname, './public/index.html'));
// })

app.listen(5000, ()=>{
    console.log('listening on port 5000...');



});
