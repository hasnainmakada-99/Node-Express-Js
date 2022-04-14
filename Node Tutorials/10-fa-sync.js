let {readFileSync, writeFileSync}= require('fs');

console.log('start');

const file1=readFileSync('./folder/test2.txt', 'utf-8');
const file2=readFileSync('./folder/subfolder/test1.txt', 'utf-8');



console.log("First File", file1);
console.log('Second File', file2);

writeFileSync('./folder/samplewrite.txt', `Here is The Result of both the files ${file1}, ${file2}`);


console.log('we are done here');