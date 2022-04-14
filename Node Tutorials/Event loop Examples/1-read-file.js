const {readFile, writeFile} =require('fs');
console.log('started the first task');
readFile('./sample1.txt', 'utf-8', (err, result)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(result);
    }
    console.log('completed first task')
})

console.log('starting the next task');