// que 7

//  let age = prompt("user ki age batao");

//  if (age === null){
//     console.error("User ne input cancel kar diya");
//  } else{
//     if (age.trim()==="" ){
//         console.error("User ne koi value input nahi ki");
//     }
//     else{
//         age = Number(age)
//         if (isNaN(age)){
//             console.error("Invalid input. Please enter a numeric value for age.");

//         } else {
//             if (age < 0) console.error("Age negative hai");
//             else if (age >= 18) console.log("User adult hai");
//             else console.log("you can't vote");
//         }
//     } 
//  }

// Que 8.

// for (let i = 1; i < 11; i++){
//     console.log(`18 x ${i} = ${18 * i}`);
// }

//que no 9

// let count = 0;

// for(let i = 1; i <16; i++){
//     if (i > 8){
//         ++count;
//         console.log(i);
//     }
// }

// console.log(`Total numbers greater than 8 are: ${count}`);

// let password = "manish";
// let userInput = prompt("Please enter your password:");
// if (userInput === null) {
//     console.error("User ne input cancel kar diya");
// }
// else {
//     if (userInput.trim() === password) {
//         console.log("Login successful!");
//     }else {
//         console.error("Incorrect password. Please try again.");
//     }

// }

// que 16. level 2

// allow only 3 ateempts ti enter coreect password

//prossece

// pahala prompt 
// glat - > dosra prompt
// sahi hua - stope ho jaiyega

// let attempts = 0;
// let khulgya = false;
// let password = "manish";

// let userInput = prompt("Please enter your password:");

// if (password === userInput) khulgya = true;

// while ( password !== userInput){
//     if (attempts === 3) {
//         console.error("Maximum attempts reached. Access denied.");
//         break;
//     }

//     userInput = prompt("Incorrect password. Please try again:");
//     if (password === userInput) khulgya = true;
//     attempts++;
// }
// if (khulgya === true) console.log("Login successful!");

// let attempt = 0;
// let sahipassword = "manish";

// let userpassword = prompt("apna password daalo");
// attempt++;

// while(attempt < 3 && sahipassword !== userpassword){
//     userpassword = prompt("galat password hai, dobara daalo");
//     attempt++;
// }

// if (attempt === 3 && sahipassword !== userpassword){
//     console.error("Account locked due to too many failed attempts.");
// }else{
//     console.log("Login successful!");
// }

// 12. ask user for word until they type "stop" count how many times they typed "yes"   

// let word = prompt("koi word daalo");
// let counter = 0;

// while (word !== "stop"){
//     if (word === "yes") 
//         counter++;
//         word = prompt("word daalo");
    
// }

// console.log(`Total 'yes' entered: ${counter}`);

// que 13. level 2

// print number divisible by 7 from 1 to 50 use moduls % and loop.

// for(let i = 1; i < 50; i++){
//     if (i % 7 === 0){
//         console.log(i);
//     }
// }

// que 14. level 2
// sum of all odd numbers from 1 to 30 add only odd numbers. print final sum.
// let sum = 0;

// for (let i = 1; i <= 30; i++){
//     if (i % 2 !== 0){
//         sum = sum + i;
//     }
// }
// console.log(`Total sum of odd numbers from 1 to 30 is: ${sum}`);

// que 15. level 2 
// keep asking number until user enters an even number use while loop. stop only if input is even.

// let num = prompt("number bolo");
// num = Number(num);

// while (num % 2 !== 0){
//     num = prompt("galat number hai, even number daalo");
//     num = Number(num);
// }

// console.log("Thank you for entering an even number!");

// que 16. level 2
// print numbers between two user inputs input start and end using prompt () -> print all between.

// let start = prompt("Enter a starting number:");
// let end = prompt("enter an ending number:");

// if (start > end) console.error("Starting number should be less than or equal to ending number.");

// for (let i = start; i <= end; i++) {
//     console.log(i);
// }

// que 17. level 2
// print only first 3 odd numbers from 1 to 20 use loop. stop with breack after 3 odd number

// let counter = 0;
// for (let i = 1; i <= 20; i++){
//     if(counter === 3) break;
//     if(i % 2 !== 0){
//         console.log(i);
//         counter++;
//     }
// }

// que 18. level 2
// ask user 5 numbers. count how many are positive. use loop + condition + counter.

// let counter = 0;

// for (let i = 1; i <= 5; i++){
//     let num = +prompt("koi number daalo:");
//     if (num > 0) counter++;

// }
// console.log(`Total positive numbers entered: ${counter}`);

// que 19. level 2
// atm simulator - allow 3 widthrals 
// start with balance 1000
// widthral amount 3 times.
// if enough balance - dectuct and show remaining balance
// else -> print insufficient balance

// let balance = 1000;
// let flag = false;
// let counter = 0;

// while (balance > 0 && counter < 3){
//     let withdraw = +prompt("Enter amount to withdraw");
//     counter++;
//     if(withdraw <= balance) balance -= withdraw;
//     else {
//         flag = true;
//         break; 
//     }
// }

// if (flag === true){
//     console.error("Insufficient balance.");
// }

// console.log(`Remaining balance: ${balance}`); 