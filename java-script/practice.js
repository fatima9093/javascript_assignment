const prompt = require("prompt-sync")();

//question no 1

// let age=prompt("enter your age")
// if(age>=10 && age<=20){
//     console.log("you are a teenager")
// }
// else{
//     console.log("you are a kid")
// }

//question no 2

// let marks=75
// let grade=''
// switch(true){
//     case (marks>=90 && marks<=100):
//         grade='A';
//         break;
//     case (marks>=80 && marks<=90):
//         grade='B';
//         break;
//     case (marks>=70 && marks<=80):
//         grade='C'
//         break;
//     case (marks>=60 && marks<=70):
//         grade='D'
//         break;
//     case (marks>=50 && marks<=60):
//         grade='F'
//         break; 
//     default:
//         grade='grade are invalid';
// }
// console.log("Students marks ",marks)
// console.log("student grades",grade)

//question no 3

// let number=30
// if(number%2==0 && number%3==0){
//     console.log(number," is divisible by both 2 and 3 ")
// }
// else{
//     console.log(number,"is not divisible")
// }

// question no 4

// let number=31
// if(number%2==0 || number%3==0){
//     console.log(number," is divisible by either 2 and 3 ")
// }
// else{
//     console.log(number,"is not divisible")
// }


//question no 5

// let age=13
// let driver=age>=18?"you are eligible":"you are not eligible"
// console.log(driver)

// let x=prompt("enter your age")
// console.log(x)

// Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results.
// Sample numbers : 0, -1, 4
// Output : 4, 0, -1

// const x=10
// const y=-17
// const z=50
// if(x>y && x>z){
//     if(y>z ){
//         console.log(x+","+y+","+z)
//     }
//     else{
//         console.log(x+","+z+","+y)
//     }
// }
// else if(y>x &&y>z){
//     if(x>z){
//         console.log(y+","+x+","+z)
//     }
//     else{
//         console.log(y+","+z+","+x)
//     }
// }
// else if(z>x &&z>y){
//     if(x>y){
//         console.log(z+","+x+","+y)
//     }
//     else{
//         console.log(z+","+y+","+x)
//     }
// }

// . Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

// for(let i=0;i<=15;i++){
//     if(i%2==0){
//         console.log(i, " is even ")
//     }
//     else if(i%2!=0){
//         console.log(i, " is odd ")
//     }
// }
// const student=[
//     {name:"Dawood",marks:77},
//     { name:"Mohsin",marks:77},
//     { name:"Awais",marks:88},
//     { name:"Ahsan",marks:95},
//     { name:"Fatima",marks:68}
// ]
// let totalMarks=0
// for(let i=0;i<student.length;i++){
//     totalMarks+=student[i].marks
// }

// const averageMarks=totalMarks/student.length

// console.log("Average marks",averageMarks)

// let grade;
// if(averageMarks<60){
//     grade="F"
// }
// else if(averageMarks<70){
//     grade="D"
// }
// else if(averageMarks<80){
//     grade="C"
// }
// else if(averageMarks<90){
//     grade="B"
// }
// else{
//     grade="F"
// }

// console.log("grade is ",grade)


// let number=4
// for(let i=0;i<=4;i++){
//     let pattren=''
//     for(let j=0;j<=i;j++){
//         pattren +='*'
//     }
//     console.log(pattren)
// }


// const mark={
//     asma:26,
//     hamid:66,
//     fatima:83,
//     mehmood:23
// }
// for (let i=0;i<Object.keys(mark).length;i++){
//     console.log("the marks of "+ Object.keys(mark)[i] + " are " + mark[Object.keys(mark)[i]])
// }

// for(let x in mark){
//     console.log("the marks of "+ x + " are " + mark[x])
// }



//with while loop

// let sum = 0;
// let number=parseInt(prompt("Enter a number: "));
// while (number>=0) {
//     sum += number;
//     number=parseInt(prompt("Enter a number: "));

// }
// console.log(`Sum of positive numbers entered: ${sum}`);



//with do while loop

// let sum = 0;
// let number=parseInt(prompt("Enter a number: "));
// do{
//     sum += number;
//     number=parseInt(prompt("Enter a number: "));

// }while (number>=0) 
// console.log(`Sum of positive numbers entered: ${sum}`);


// Q: 2. Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". For numbers multiples of both three and five print "FizzBuzz".

for(let i=0;i<=100;i++){
    if(i%3===0 && i%5===0){
        console.log(i + " FizzBuzz ")
    }
    else if (i%3===0){
        console.log(i + " Fizz")
    }
    else if (i%5===0){
        console.log(i + " Buzz")
    }
    else{
        console.log("")
        // console.log(i)
    }
}



