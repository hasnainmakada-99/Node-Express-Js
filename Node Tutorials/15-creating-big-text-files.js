const fs =require('fs');

for(let i=0;i<10000;i++){
     fs.writeFileSync('./bigtextfile.txt', `Numbers in a loop: ${i}`, {flag: 'a'});
}