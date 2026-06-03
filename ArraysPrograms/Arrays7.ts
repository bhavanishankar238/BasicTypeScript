let animals : string[]= ["cow", "buffalo", "goat", "monkey","horse","ox","fox"]

//adding the element at the starting  index  of 0
animals.unshift("crocodile");

console.log(animals);

//adding the element at the ending of the index
animals.push("Peacock");

console.log(animals);

//delete an element at starting of index
animals.shift();

console.log(animals);

//delete an element at ending of the index
animals.pop();

console.log(animals);