function Animal () {
  this.name = '动物';
  this.action = function () {
    console.log(this.name)
  }
}

let child = new Animal()

console.log(child.constructor) // [Function: Animal]
console.log(child.__proto__) // { constructor: function Animal()}
console.log(Animal.prototype) // { constructor: function Animal()}
console.log(Animal.__proto__) // f () { [native code]}
console.log(child.__proto__ === Animal.prototype) // true