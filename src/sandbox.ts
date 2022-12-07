let greet: Function

greet = () => {
    console.log('hello')
}

const add = (a: number, b: number, c: number | string = 14) => { // pass optional parameters at the end.
    console.log(a + b)
    console.log(c)
}

add(5, 12)

const minus = (a: number, b: number) => {
    return a + b;
}

let result = minus(4,5)
console.log(result)    // TS is infering this is a type number.