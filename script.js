/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map((item)=>{
        item.profession=="developer"?console.log(item):null
    })
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach(item=>{
        item.profession==="developer"?console.log(item):null
    })
  }
  function addData() {
    //Write your code here, just console.log
    const newElement={id:4,name:"Prasad",age:22,profession:"developer"};
    arr.push(newElement);
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    const updated=arr.filter((item)=>item.profession!="admin");
    arr=updated;
    console.log(arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let newEmployees=[   
        {id:1,name:"Ajay",age:22,profession:"developer"},
        {id:2,name:"Tirumala",age:22,profession:"developer"},
        {id:3,name:"Balaji",age:22,profession:"developer"}     
    ];
  
  let concatenatedArray=arr.concat(newEmployees);
  arr=concatenatedArray;
  console.log(arr);
}

 