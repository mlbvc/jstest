let str = '我要去[一|二]的地方吃(三|四)可以吗？';
str = str.replace(/\[/g, '(');
str = str.replace(/\]/g, '|"")');

console.log('str', str)

let reg1 = /([^\[])\|([^\]])/g;
// let reg2 = /([^\(])\|([^\)])/g;
let reg3 = /[^\(][\)$]/g;


console.log(11, reg1.exec(str))
console.log(33, reg3.exec(str))
// console.log(22, reg2.exec(str))

function exam () {
  
}