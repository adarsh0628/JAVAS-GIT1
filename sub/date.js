// date
 
let mydate = new Date()
//console.log(mydate.toString());
//console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleString());
//console.log(typeof mydate);

let myCreatedDate = new Date(2023,1,28)
//console.log(myCreatedDate.toDateString());

 let mytimestamp = Date.now()

 //console.log(mytimestamp);
 //console.log(myCreatedDate.getTime());
 //console.log(Math.floor(Date.now()/1000//));

 let newDate = new Date()
 console.log(newDate);
 console.log(newDate.getDay());
 console.log(newDate.getMonth());

 let newDate1 = new Date()
 newDate1.toLocaleString('default',{
    weekday:"long"
 })
  
 console.log(newDate1.toLocaleDateString());