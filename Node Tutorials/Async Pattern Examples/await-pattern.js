// const {readFile, writeFile} = require('fs').promises; // this will automatically wrap the readfile and writefile functions in promises for async operations


// Using the utils Module
const {readFile, writeFile}=require('fs');
// const fs=require('fs'); // another way to do it and its methods are the readfile and writeFile
const util= require('util');
const readFilePromise= util.promisify(readFile);
const writeFilePromise=util.promisify(writeFile);

// const start=async()=>{
//     try {
//         const file=await readFile('./sample1.txt', 'utf-8');
//         console.log('Files content ', file);
        
//     } catch (error) {
//         console.log(error);
//     }
// }

// another way using the util module
const start=async()=>{
    try {
        const file= await readFilePromise('./sample1.txt', 'utf-8');
        await writeFilePromise('./another-file.txt', 'This text is written while performing promises using the util package');
        console.log(file);    
    } catch (error) {
        console.log(error);
    }
    
}
start();