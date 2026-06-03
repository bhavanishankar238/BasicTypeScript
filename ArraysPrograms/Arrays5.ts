//let animals : string[]= ["cow", "buffalo", "goat", "monkey","horse","ox","fox"]

//console.log(animals);

//printing based on index
//console.log(animals[4]);


let animals1 : string[]= ["cow", "buffalo", "goat", "monkey","horse","ox","fox"]
let animals2 : string[]= ["deer", "kangaroo", "donkey", "camel","zebra","lion","Tiger"]

let animals : string [] = animals1.concat(animals2);

//print after concat
console.log(animals);

//getting the index based element
console.log(animals2.indexOf("donkey"));