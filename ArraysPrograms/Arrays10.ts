let animals1 : string[]= ["cow", "buffalo", "goat", "monkey","horse","ox","fox", "bear"]

//printing each and every individual element using for of
for(let x of animals1)
{
console.log(x);
}

console.log("---------------------------")
let animals2 : string[] =animals1.reverse();// Storing reverse of an array

for(let y of animals2)
{
    console.log(y);
}
console.log(animals2);