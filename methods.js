// their is two way to create the array 
// let a  = [2,3,4,5,6]
// var a1 = new Array();
// a1.push(10,20,30,40);
// a1.push(50,60,70,80);
// console.log(a1);
// console.log(a);

// // slice Methods 

// //deletion 
// console.log(a.splice(1,2));

// //insertion
// console.log(a.splice(2,0,30,40,80));

// //updation
// console.log(a);

let a = [23,34,54,67];
let b = [33,44,55,66,77]
let c = []

console.log(a.reverse());
console.log(b.reverse());

a.forEach(val => {
    c.push(val)

    
});

b.forEach(val=>{
    c.push(val)
})


console.log(c);

let arr1 ;
let arr2 ;

const alpha =(Arr)=>{
    let len = Math.floor(a.length/2);
  arr1 = a.slice(0,len);
  arr2 = a.slice(len);
    
  console.log(arr1);
  console.log(arr2);
}

alpha(a);


