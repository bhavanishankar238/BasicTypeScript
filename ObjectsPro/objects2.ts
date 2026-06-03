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

//delete an element from the original object
delete empinfo.empphno;
console.log(empinfo);

//delete subobject from the object
delete empinfo.empadd;
console.log(empinfo);