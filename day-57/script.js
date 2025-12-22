// constructor -> yah ek apne ap chalne wala function hai 
// class Bottle{
//     constructor(){
//         // write your code her
//     }
// }


// Prototypes -> Prototype is an shared memory hota hai 

// class Sketch{
//     constructor(){
//         this.charactor = "Doremone"
//         this.color = "Doremone"
//         this.somefnc = function(){};

//     }
// }

// Sketch.prototype.speak = function(){}
// Sketch.prototype.work = function(){}

// let Sketch1 = new Sketch();
// let Sketc2 = new Sketch();

// this -> "this" is a special keyword in javascript

// globle -> window -> value of "this"
// function -> window
// es5 function inside object -> object
// es6 function inside object -> window
// es6 function inside es5 function inside object -> window
// es6 function inside es6 function inside object -> object 

// let obj = {
//     name: "manish",
//     func: function(){
//         console.log(this.name);
//     }
// }

// obj.func();

// let obj = {
//     fn: ()=>{
//         console.log(this)
//     }
// }

// obj.fnc();

// let obj = {
//     fn: function(){
//         function abcd(){
//             console.log(this);
//         }
//         abcd();
//     },
    
// };

// obj.fnc();

// let obj = {
//     fnc:  () =>{
//         function abcd(){
//             console.log(this);
//         }
//         abcd();
//     }
// }

// obj.fnc();

// call apply bind

// ek function me this ki value window hoti hai agar aap chahte ho ki wo value window hua ho per koi or object ho tab use kar sakte ho call apply bind ka 

// let obj = {
//     name: "Manish"
// }

// function abcd(){
//     console.log(this)
// }

//abcd.call(obj);

// toppic bind

// let obj = {
//     name: "manish"
// }

// function abcd(a, b, c){
//     console.log(this, a, b, c);
// }

// let newfnc = abcd.bind(obj, 1, 2, 3);

// // call the function in future

// new fnc();

// call-> function chalta hai and "this" ki value set karta hai

// apply-> wahi karta hai jo call karta hai and argument me pahali value 

// bind -> wahi karta hai jo call karta hai 

