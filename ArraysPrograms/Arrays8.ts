let animals : string[]= ["cow", "buffalo", "goat", "monkey","horse","ox","fox", "bear"]

//deleting any elemnts based up on index count
animals.splice(3, 4);

console.log(animals);
//deleting elemnets based on index 3 till only one(1) and adding three elemnts from index
animals.splice(3, 1, "Hen", "Rhino", "hippo");

console.log(animals);