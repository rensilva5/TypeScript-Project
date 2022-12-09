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
    // readonly client: string;
    // private details: string;
    // public amount: number

    constructor(
        readonly client: string,  //this only work if we have these parameters in front
        private details: string,  //this only work if we have these parameters in front
        public amount: number,    //this only work if we have these parameters in front
    ) {}

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

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format())
})

// invOne.client = 'Paul'
// invTwo.amount = 300

// console.log(invOne, invTwo)

// console.log(invoices)



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