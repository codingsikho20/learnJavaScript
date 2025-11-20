// function in js Javascript 

// understanding function in javascript and whay its widly useed - [`parameters] , `arguments, `rest parameters , `hoisting , variable hoisting` `function hoisting`
// code ko reuse karne me help karta hai 

// function abcd(age, name){
//     // parameters
// }

// abcd(12, "manish");
// // aargument

// function abcd(a, b, ...c){
//     console.log(a, b, c)
// }

// abcd(1, 2, 3, 4, 5, 6)

// abcd();
// var abcd = function(){
//     console.log("hey guyss");
// };

// 2. parameters in javascript - [`required`, `destructured`, `rest`, `default`]

// function abcd(a, b, c, d){

// }

// abcd();

// function abcd({name, age}){
//     console.log(name, age);
// }

// abcd({name: "manish", age: 22});

// 3. `classic function`, `nested function`, (function within function)`, `scope chain` in javascript.

// function abcd(){
//     function defg(){
//         console.log("defg chala")

//     }
//     defg();
// }

// abcd();

// scoping in javascript

// let a = 12;

// function abcd(){
//     let b = 13;
//     function defg(){
//         console.log(b);
//     }
// }

// abcd();

// 4. IIFE - Immediately Invoked Function Expression

// (function (){
//     let balance = 1000;

// })();

// 5. more function in javascript - [`callback function`, `arrow function`, `higher order function` anymous``first class` `pure function` `side effect` impure function]

// ()=>{
//     console.log("arrow function");
// }


// function (){
//     console.log("anonymous function");
// }

// function higherOrderFunction(callback) {
//     return function () {
//         console.log("Higher Order Function");

//     } }


// function pure Function

// let a = 12;
// function pureFunction(val) {
//     console.log(val + 2);
// }
// pureFunction(a); // 14
// pureFunction(a); // 14      
// pureFunction(a); // 14

// function impureFunction() {

// let a = 12;
// function impureFunction(val) {
//     console.log(Math.random() + val);
// }

// impureFunction(a);
// impureFunction(a);
// impureFunction(a);
