// class expression

// let Animal = class {
//     costructor(){
//         this.name = "Dodo"
//         this.bread = "dog"
//     }
// }

// let an1 = new Animal();

// hoisting 

// let an1 = new Animal();

// let animal = class {
//     constructor(){
//         this.name = "dodo"
//         this.bread = "dog"
//     }
// }gs


// inheritance -> agar koi class hai jisame kuch kuch likha hai and aapp mante ho ki ek naya class usi ka extention haoi to aap wo saare feature purani class se borrow kar sakte ho anD apne naye feature add karsakte hai 

// class Animal {
//     constructor() {
//         this.hand = 2;
//         this.lags = 2;
//     }

//     eat() {
//         console.log("1 din me do bar khata hai");
        
//     }

//     breathe() {
//         console.log("1second me 26 bar saas leta hai ");
        
//     }
// }

// class kekda extends Animal {
//     constructor() {
//         this.legs = 8;
//         this.hands = 0;
//     }

//     susu(){
//         console.log("ye sla ek din 1 bhi bar susu nahi kata hai iska kiya kiya ja skata hai ye log bahuit hi chutiya hai salr ek din me ek bar bhi susu nahi karte hai chalo hum enka kuch jugas karte hai naji to enki sss bhi kabni nai karenge sle madhar chi");
        
//     }
// }

// let an1 = new Animal()

// setter 

// class Animal{
//     constructor(){
//         this._age = 12;

//     }

//     setAge(val){
//         if(val<0){
//             console.error("not");
//             return;
//         }

//         this._age = val
//         return this._age
//     }

//     getAge(){
//         return this._age;
//     }
// };

// let a1 = new Animal();
// a2.age = 37;