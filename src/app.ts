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
    client: string;
    details: string;
    amount: number

    constructor(c: string, d: string, a: number) {
        this.client = c
        this.details = d
        this.amount = a
    }
    format() {
        return `${this.client} owes $${this.amount} ${this.details}`
    }
}

const invOne = new Invoice('Harry', 'work from home', 230)
const invTwo = new Invoice('Larry', 'work from office', 270)

// console.log(invOne, invTwo)
let invoices: Invoice[] = []
invoices.push(invOne)
invoices.push(invTwo)

invOne.client = 'Paul'
invTwo.amount = 300

console.log(invOne, invTwo)

console.log(invoices)



const form = document.querySelector('.new-item-form') as HTMLFormElement // the we can access diffrent methods.
// console.log(form.children)

// inputs
const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    )
})