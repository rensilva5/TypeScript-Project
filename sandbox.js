// explicit types, example bellow
var character;
var age;
var isLogged;
age = 34;
// isLogged = 40  cannot happened
isLogged = false;
//arrays work this way
var warriors = [];
// warriors = ['pet', 'jhon']
warriors.push('peter');
//union types: are several types
var mixed = []; // this array can be any type of these
mixed.push('robert');
mixed.push(41);
mixed.push(true);
console.log(mixed);
// normal variable don't need parenthesis
var enterId;
enterId = 3394;
enterId = 'paola';
// enterId = false won't work
// Objects
var warriorOne;
warriorOne = { name: 'pan', age: 29 }; //this is fine
var warriorTwo;
// then the keys must have the same key values.
warriorTwo = { name: 'jason', age: 40, skills: 'fight' };
