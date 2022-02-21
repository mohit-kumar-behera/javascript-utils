const flattener = require('./flattener');

const { nestedArr, nestedObj } = require('./data/data');

const flattenedArr = flattener.flattenArr(nestedArr, 3);

const flattenedObj = flattener.flattenObj(nestedObj, '', '.');
console.log(flattenedObj);
const deflattenedObj = flattener.deflattenObj(flattenedObj, '.');
console.log(deflattenedObj);
