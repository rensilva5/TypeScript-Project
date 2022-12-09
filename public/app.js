"use strict";
// const anchor = document.querySelector('a')!;
// if (anchor) {
//    console.log(anchor.href)
// }
// or
// console.log(anchor.href)
// const form = document.querySelector('form')!;
// console.log(form)
// const form = document.querySelector('.new-item-form')! 
// Classes --> blueprint for an object
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes $${this.amount} ${this.details}`;
    }
}
const invOne = new Invoice('Harry', 'work from home', 230);
const invTwo = new Invoice('Larry', 'work from office', 270);
// console.log(invOne, invTwo)
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invOne.client = 'Paul';
invTwo.amount = 300;
console.log(invOne, invTwo);
console.log(invoices);
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
