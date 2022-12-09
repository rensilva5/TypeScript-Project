"use strict";
// const anchor = document.querySelector('a')!;
// if (anchor) {
//     console.log(anchor.href)
// }
// or
// console.log(anchor.href)
// const form = document.querySelector('form')!;
// console.log(form)
// const form = document.querySelector('.new-item-form')! 
const form = document.querySelector('.new-item-form'); // the we can access diffrent methods.
// console.log(form.children)
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
