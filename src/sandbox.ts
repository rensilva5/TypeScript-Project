// let greet: Function

const logDetails = (uid: string |number, item: string) => { // pass optional parameters at the end.
    console.log(`${item} has a uid of ${uid}`)
}

const greet = (user: {name: string, uid: string | number}) => {
    console.log(`${user.name} says hello`)
}

// we can go around this long specifiactions by creating types
type StringOrNum = string | number

const logDetails1 = (uid: StringOrNum, item: string) => { // pass optional parameters at the end.
    console.log(`${item} has a uid of ${uid}`)
}
//or
type objWithName = {name: string, uid: string|number}

const greet1 = (user: objWithName) => {
    console.log(`${user.name} says hello`)
}