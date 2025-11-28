// setTimeout concept

// setTimeout(function(){
//     console.log("lalka1")
// }, 3000);

// setTimeout(function(){
//     console.log("lalka2")
// }, 4000);

// setTimeout(function(){
//     console.log("lalka3")
// }, 5000);


// var btn = document.querySelector('button')
// var h1 = document.querySelector('h1')

// btn.addEventListener('click', function(){
//     h1.innerHTML = 'Changing user...'

//     setTimeout(function(){
//         h1.innerHTML = 'Hello I am ManishNandani!'
//     }, 3000);

    
// });

// var a = 0;

// // setInteval(function(){
// //     console.log("manishNandani ");

// // },1000)

// var int = setInterval(function(){
//     a++;
//     console.log(a);

// },0.1)

// setTimeout(function(){
//     clearInterval(int);
// }, 5000)

// Creating a card dynamically using JS

var grow = 0;
var btn = document.querySelector('button')
var h2 = document.querySelector('h2')
var inner = document.querySelector('.inner')



btn.addEventListener('click', function(){

   btn.style.pointerEvents = 'none'

   var num = 50 + Math.floor(Math.random()*50)

   var int =  setInterval(() => {
        grow++;
        h2.innerHTML = grow + "%";
        inner.style.width = grow + "%";
    },num);

    setTimeout(() => {
        clearInterval(int);
        btn.innerHTML = 'Downloded'

        console.log('Downloaded in',num/10,'Seconds');
    }, num*100);
    
})