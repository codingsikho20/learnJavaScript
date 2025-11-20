// write a higher-order function runTwice(fn) that takes another function and executes it two times.

// function runTwice(fn){
//     fn();
//     fn();
// }

// runTwice(function (){
//     console.log("Hello")
// })


// create one pure function that always returns the same output for given InputDeviceInfo, and one impure function using a globle variable

// function pure(a, b){
//     console.log(a + b);
// }

// pure(1, 2);
// pure(1, 2)

// let global = 0;
// function impure(a){
//     global++;
//     console.log(a + global);
// }

// impure(2);
// impure(2);

// write a function that uses object destructuring inside parameters to extract and print name and age.

// function abcd({name, age}){
//     console.log(name, age);
// }

// abcd({name: "harsh", age: 27});

// demonstrate the difference between normal function and arrow function when used as object methods (this issue).

// let obj = {
//     name: "harsh",
//     fnc: function (){
//         function fnc2(){
//             console.log(this);
//         }
//         fnc2();
//     },
// };

// obj.fnc();

// given an array of numbers, use map() to create a new array where each number is squared.

// let arr = [1, 2, 3, 4, 5];
// let newarr = arr.map(function (val){
//     return val * val;
// });

// console.log(newarr);

// use filter() to get only even numbers from an array.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newarr = arr.filter(function (val){
//     return val % 2 === 0;
// });

// use reduce() to find the total salary from an array of numbers [1000, 20000, 30000]

// let salary = [10030, 20040, 360123];
// let ans = salary.reduce(function (acc, val){
//     return acc + val;

// }, 0);

// create an object user and test the behavior of object. freeze() and object.seal() by adding/changing keys.

// let user = {
//     name: "harsh",
//     age: 27,
//     email: "h@h.h",
// };

// Object.freeze(user);
// user.name = "harshita";
// user.social = "instagram";

// create an array of names and use some() and every() to test a condition (e.g., all names longer than 3 chars).

// let names = ["manish", "om", "shanti", "ali"];

// let ans = names.some(function (val){
//     return val.length > 3;
// });


// practice for the stackoverflow

// create a nested object (user -> address -> city) and access the city name inside it.

// let obj = {
//     user: {
//         name: "manish",
//         address: {
//             city: "bhopal",
//         },
//     },
// };

// let {city} = obj.user.address;
