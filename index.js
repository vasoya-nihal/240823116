const surname="vasoya"
const  name = "nihal"
console.log(name)
console.log(surname)



// 1
let num = 7

if(num % 2 == 0){
    console.log("number is even")
}else{
    console.log("Number is odd")
}

// 2
let number2 = 5;
let number3 = 7;

if(number2>number3){
    console.log("Number 2 is greater")
}else{
    console.log("Number 3 is geater")
}

// 3
let year = 2021

if(year % 4 == 0){
    console.log(year+"year is leap")
}else{
    console.log(`${year}Year is not leap`)
}


// 4
let n =10;
let sum = 0;
for (let i =1;i<=n;i++){
    sum+=i;
}
console.log(`Sum of first ${n} natural number is ${sum}`)

// 5

let n1 = 5;
let result = 1;

for (let i = 1; i <= n1; i++) {
  result *= i;
}

console.log(result);


// 6

let number = 5; 
let rows = 10;  
for (let i = 1; i <= rows; i++) {
  console.log(number + " x " + i + " = " + (number * i));
}

// 7
let n2=12345;
let result1=n2.toString().split('').reverse().join('');
console.log(result1)