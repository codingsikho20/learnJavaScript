let inc = document.querySelector('#inc')
let dec = document.querySelector('#dec')
let counter = document.querySelector('#counter')

let count = 0

inc.addEventListener('click', function(){
    count++
    counter.querySelector('h1').textContent = count
})

dec.addEventListener('click', function(){
    count--
    counter.querySelector('h1').textContent = count
})