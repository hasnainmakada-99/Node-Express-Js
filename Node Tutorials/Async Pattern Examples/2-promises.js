const {readFile, writeFile}=require('fs');
const {readFileSync, writeFileSync}= require('fs');
const getText=(path)=>{ // we only have to provide the path over here
    return new Promise((resolve, reject)=>{ // returns the promise
        readFile(path, 'utf-8', (err, result)=>{
            if(err){
                reject(err); // it will call the reject function and provide the error to it
            } 
            else{
              resolve(result); // it will call the resolve function over here and provide the result to it
            } 
        })
    })
}

getText('./sample1.txt') // just provided the path over here
.then((result)=>console.log(result))
.catch((err)=>console.log(err))