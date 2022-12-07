let names = ['carl', 'tommy', 'tom']

names.push('charles')

// names.push(4)  the type cannot be changed 
// names[0] = 3   the type cannot be reasigned with a different type.

let numbers = [10, 20, 40, 50]


// when we have declared different types, we can assign, reassign, or change. See example bellow 
let mix = ['jhon', 4, true, 'thomas'] 

mixed.push(5)
mixed.push('martin')
mixed[0] = 5

console.log(mixed)

// Objects //type cannot be changes as in variables.
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
}

ninja.age = 40 //this is fine
ninja.name = 'tarzicio' //this is also fine.
// ninja.name = 35 this is not gonna work.




// In typeSvcript a type will always be the same
// variables can chance, but with the same type.
// Double and single quatiotion are ok.
// JS uses Inference.
// Less errors in the process.