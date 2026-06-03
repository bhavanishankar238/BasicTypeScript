let fancynum : number[]= [23, 34, 5, 6, 98, 56,12]

let adding7 : number[] = fancynum.map(x => x+7);// these rae arrow based function used in functions Type.

console.log(adding7);

let filter3 : number[] = fancynum.filter(v =>v%3 != 0);//%divide number and get the remainder

console.log(filter3);
