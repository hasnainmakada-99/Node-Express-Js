const path=require('path');
// console.log(path.sep);

const filepath=path.join('/folder', '/subfolder', 'test1.txt');

console.log(filepath);

const basename=path.basename(filepath);
console.log(basename);
const absolute1 = path.resolve(__dirname, 'folder', 'subfolder', 'test1.txt') // prints the whole directory in the log

console.log(absolute1);
let absolute=path.resolve(__dirname, filepath); // we have provided the joined path name so it will return the path to that file only
console.log(absolute); 