function calculating() : number // Number is a returntype  with number value and without parameters.
{
 let a : number = 76;
 let b : number = 64;
let p  :  string = "Pecock";
console.log("The sum of A and B is :"+(a+b));
 //return a;
 //return b;//unreachable code
 return a-b;
}
//console.log(calculating());
console.log("The difference between A and B is :" +calculating());//we are calling the function with function name