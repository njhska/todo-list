let arr = ['a','b'];
let str = JSON.stringify(arr);
let arr2 = JSON.parse(str);
arr2.push('3');
console.log(str);
console.log(arr2);