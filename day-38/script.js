// arrays 
//ek se jiyada members rakhne ki jagah ko arrays kahte 

// let arr = [2, 3 , 4, 5, 6, 7];
// console.log(arr[5]);

// // function on arrays - [push, pop, shift, unshift, length, indexOf, array destructuring, filter, some, map, reduce, spread operator, slice, reverse, sort, join, toString]

// // push - add element at the end of the array
// arr.push(8);
// console.log(arr);

// // pop - remove element from the end of the array
// arr.pop();
// console.log(arr);

// // unshift - add element at the beginning of the array
// arr.unshift(1);
// console.log(arr);

// // shift - remove element from the beginning of the array
// arr.shift();
// console.log(arr);

// // length - returns the length of the array
// console.log(arr.length);

// // indexOf - returns the index of the element
// console.log(arr.indexOf(5));

// // array destructuring
// let [a, b, c] = arr;
// console.log(a, b, c);

// filter - returns a new array with elements that pass the test
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr2 = arr.filter(function(val){
//     return val < 3;
// });

// spread operator - to spread the elements of an array
// let arr = [1, 2, 3];
// let arr2 = [...arr];


// iterating over arrays using - [for loop, forEach]

// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i <= 5; i++) {
//     console.log(arr[i]);
// }

// arr.forEach(function(val, index){

// let arr = [1, 2, 3, 4, 5];
// arr.forEach(function(val){
//     console.log(val);
// });

// - understanding what are object in javascript [key-value pairs]

// let obj = {
//     name: "manish",
//     age: 18,
//     email: "manish2343@male.com",
// };

// let obj2 = new Object();
// obj2.name = "rahul";
// obj2.age = 20;
// obj2.email = "rahul@example.com";

// creating objects, accessing properties, deleting properties, and nested Objects.

let obj = {
    name: "manish",
};
delete obj.name;

let nestedObj = {
    name: "manish",
    address: {
        city: "delhi",
        country: "india",
    },
}