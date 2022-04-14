const {readFile, writeFile}=require('fs');
console.log('Starting noww');
readFile('./folder/test2.txt', 'utf8', (err, result)=>{
        if(err){
            console.log(err);
        }
        else{
            const first=result;
            readFile('./folder/subfolder/test1.txt', 'utf8', (err, result)=>{
                    if(err){
                        console.log(err);
                    }
                    else{
                        const second=result;

                        writeFile('./folder/samplewrite2.txt',
                            `Here is the result of both the files ${first}, ${second}`, (err, result)=>{
                                if(err){
                                    console.log(err);
                                }
                                else{
                                    console.log('Done with the task');
                                }
                            }
                        )
                    }
            })
        }
})

console.log('starting the next task');