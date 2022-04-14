const lodash=require('lodash');

const arr1=[1, [2, [3, [4, [5, [6]]]]]];
const flat=lodash.flattenDeep(arr1);

console.log('Array == ',flat);