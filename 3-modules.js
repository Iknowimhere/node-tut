// Modules
// CommonJS, every file is module(by default)
// Modules-Encapsulated Code (only share minimum)

const {john,peter}=require('./4-names')     // destructuring
const sayHi=require('./5-utils')
const data=require('./6-alternative-flavour')
require('./7-mind-grenade')
// console.log(module);   // exports is a object 
sayHi(john)
sayHi('susan')
sayHi('danny')

console.log(data);