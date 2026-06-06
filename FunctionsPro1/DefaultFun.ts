function agecheck(name : string, age : number, eli = "citizen is eligible for 50% of concession")
{
if(age >= 60)
{
    console.log("Eligible criteria is :" +eli)
}
else{
    console.log("Payment full ticket fare")
}
}

agecheck("Shankar", 80);