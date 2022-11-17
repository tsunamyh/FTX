const lodash = require('lodash');

let obj = { a: 1, b: 2, c: { d: 3, e: 4, f: 'g' }, h: 'i', k: 'l', m: { n: 5 } }
let obj2 = { a: 1, b: 5, c: { d: 3, i: 4, f: 'g' }, j: 'i', k: 'l', m: { n: 5 } }
//symmetric difference [[b,2],[b,5],[c,[d:3,e:4,f:'g']],[c,[d:3,i:4,f:'g']],[h,'i'],[j,'i']]
// let result = Object.keys(obj).map((key) => [key, obj[key]]).filter(item => JSON.stringify(obj[item[0]]) !== JSON.stringify(obj2[item[0]]))
// let result2 = Object.keys(obj2).map((key) => [key, obj2[key]]).filter(item => JSON.stringify(obj[item[0]]) !== JSON.stringify(obj2[item[0]]))
// console.log('difrence::', result.concat(result2))
// let result3 = Object.keys(obj).map((key) => [key, obj[key]]).filter(item =>  obj2[item[0]] !== item[1])
// console.log('json.stringify(obj)::', JSON.stringify("khaaaaaaar"));
const result = lodash.differenceWith(lodash.toPairs(obj),lodash.toPairs(obj2), lodash.isEqual)
const result2 = lodash.differenceWith(lodash.toPairs(obj2),lodash.toPairs(obj), lodash.isEqual)
let result3 = result.concat(result2)
console.log('result::', result3);
