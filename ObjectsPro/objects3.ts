interface empdata  // creating a rough data
{
    empid : number,
    empname : String,
    emprole :  string,
    emplocation : string,
    empphno : number,
    empexp : number,

empadd :
      {
      empstreet : string,
      empdoorno : string,
      emppinno : number

      }
}

let empinfo : empdata = //creating a orginal object (empinfo) from rough data (empdata)
{
    empid : 112233,
    empname : "BhavaniShankar",
    emprole :  "QA",
    emplocation : "KPHB",
    empphno : 9951799610,
    empexp : 6,

    empadd :
      {
      empstreet : "Allwyncolony",
      empdoorno : "387/A",
      emppinno : 500072

      }
}

//checking existing of the key
console.log("emprole" in empinfo);

//getting all keys in the object
console.log(Object.keys(empinfo));

//getting all values in the object
console.log(Object.values(empinfo));

console.log(Object.entries(empinfo));