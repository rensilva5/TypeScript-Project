// explicit types, example bellow
let character: string
let age: number
let isLogged: boolean

age = 34

// isLogged = 40  cannot happened
isLogged = false

//arrays work this way
let warriors: string[] = []
// warriors = ['pet', 'jhon']

warriors.push('peter')

//union types: are several types
let mixed: (string | number | boolean)[] = [] // this array can be any type of these
mixed.push('robert')
mixed.push(41)
mixed.push(true)
console.log(mixed)

// normal variable don't need parenthesis
let enterId: string | number
enterId = 3394
enterId = 'paola'
// enterId = false won't work

// Objects
let warriorOne: object
warriorOne = { name: 'pan', age: 29 } //this is fine

let warriorTwo: {
    name: string,
    age: number,
    skills: string
}
// then the keys must have the same key values.
warriorTwo = { name: 'jason', age: 40, skills: 'fight' }