// DOM - Document Object Model
// frontend ki js

// 4 pillers
// -Selection of an Element
// changing element
// changing css
//event litsener

// -Selection of an Element
// var h1 = document .querySelector('h1')
// console.log(h1)

// // Changing HTML
// h1.innerHTML = 'Changed'

// Changing CSS
// var h1 = document.querySelector('h1')
// h1.innerHTML = 'Changed HTML'
// h1.style.color = 'red'
// h1.style.backgroundColor = 'yellow'

// event listener

// h1.addEventListener('click', function(){
//     console.log('Helliyo!');
// });

// actual code here

// var h1 = document.querySelector('h1')
// var btn = document.querySelector('button')

// btn.addEventListener('click', function(){
//     h1.innerHTML = 'I am Manish Kumar'
//     h1.style.color = 'red'
//     h1.style.fontSize = '40px'
// })

// var h1 = document.getElementById('here')

var inc = document.querySelector('#inc')
var dec = document.querySelector('#dec')
var h2 = document.querySelector('h2')

var a = 0

inc.addEventListener('click', function(){
    a++

    h2.innerHTML = a
    
})

dec.addEventListener('click', function(){
    a--

    h2.innerHTML = a
    
    
})



