// Introduction to os module in node js

// const { log } = require('console');
const os=require('os');
// console.log(os.userInfo());
// console.log(os.uptime());
// console.log();

const osobj={
    type: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    free: os.freemem(),
    platform: os.platform(),
}

console.log(osobj);