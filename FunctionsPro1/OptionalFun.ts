function mydata(name : string, aadhar ? : number)
{
    if(aadhar == undefined)
    {
     console.log("with respect to customer name :" +name+ ", not providing aadhar number")
    }
   else
    {
    console.log ("with respect to customer name :" +name+ ", The aadhar number is :" +aadhar)
    }
   
}
mydata("Shankar", 62542542523442);
