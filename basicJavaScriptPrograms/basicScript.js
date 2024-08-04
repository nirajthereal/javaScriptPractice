// factorial of the number
const f = (num)=>{
    if (num === 0) return 1
    let fact0 =1;
    for(let i=1;i<=num;i++){
        
            fact0 *= i;
        }
        return fact0;
    }

const b = f(4);
console.log(b);
//Checking the number is prime or not

const isPrime = (num)=>{
    if  (num<=1) return false;
    for(let i= 2;i<=Math.sqrt(num);i++){
        if(num%i === 0){
            return false
        }
    
        return true;
    } 
}

const val = isPrime(29);

console.log(val);

//Program to calculate the power 

// const PowerNum = (base,exponent)=>{
//     let result = 1;
//     for(let i=1;i<= exponent;i++){
//         result *= base;

//     }
//    console.log(result);
// }

// const getres = PowerNum(3,2);

const a = [1,2,3,4,5,6,7,8,9,10];
function double(val){

   

}

a.forEach((val,index,array)=>{
    

})
