console.log("Welcome to Day 39 of JavaScript!");

// create a function add (a, b) that reurns their sum and log the result.

// function add(a, b) {
//     return a + b;
// }
// let ans = add(5, 10);
// console.log(ans);

// write a function with a default parameter name = "guest" that print "welcome <name>" 

// function greeting(guest){
//     console.log(`Welcome ${guest}`);
// }

// greeting("manish"); // Welcome guest

// use rest parameters to make a function that adds unlimited numbers.

// function addUnlimited(...numbers) {
//     console.log(numbers);
// }

// addUnlimited(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]

// //dusra trika

// function addUnlimited2(...nums) {
//     let sum = 0;
//     nums.forEach(function (val) {
//         sum = sum + val;
//     });
//     console.log(sum);
// }
// addUnlimited2(1, 2, 3, 4, 5, 6); // 21

// tisra trika

// function addUnlimited3(...nums) {
//     let sum = 0;
//     for (let i = 0; i < nums.length; i++) {
//         sum = sum + nums[i];
//     }
// }

// addUnlimited3(1, 2, 3, 4, 5, 6, 7); // 28

// chautha trika

// function addUnlimited4(...nums) {
//     let ans = nums.reduce(function (acc, val) {
//         return acc + val;
//     });
//     console.log(ans);
// }

// addUnlimited4(1, 2, 3, 4); // 10

// create an iife that prints "I run instantly"

// (function() {
//     console.log("I run instantly");
// })();

// make a nested function where the inner one print a varible from the outer one.

// function parent() {
//     let a = 12;
//     function child() {
//         console.log(a);
//     }
//     child();
// }
// parent(); // 12

// create an array of 5 fruits. add one at the end and remove one from the beginning.

// let arr = ["apple", "guava", "grapes", "mango", "banana"];
// arr.push("pear");
// arr.unshift("oreng ve");
