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

//console.log(empinfo);

//printing element in the object
console.log("The emp role name is : " +empinfo.emprole)

//adding element into the original object
empinfo.office = "TCS Synergy Park";
console.log(empinfo)

//adding element into the orginal sub object
empinfo.empadd.city ="Hyderabad";
console.log(empinfo)

//updating/overriding office location
empinfo.office =" TCS Deccan Park";
console.log(empinfo)