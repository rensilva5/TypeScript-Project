"use strict";
let greet;
greet = () => {
    console.log('hello');
};
const add = (a, b, c = 14) => {
    console.log(a + b);
    console.log(c);
};
add(5, 12);
const minus = (a, b) => {
    return a + b;
};
let result = minus(4, 5);
console.log(result); // TS is infering this is a type number.
