// var btn = document.querySelector('button')

// btn.addEventListener('click', function(){

//     var h1 = document.createElement('div')

//     h1.innerHTML = 'Hello From JS'

//     console.log(h1);
// })

// var h1 = document.createElement('h1')

// h1.innerHTML = 'Hello from JS'

// var main = document.querySelector('main')

// main.appendChild(h1)

// var btn = document.createElement('button')

// btn.innerHTML = 'Download'

// var main = document.querySelector('main')

// main.appendChild(btn)

var btn = document.querySelector('button')
var main = document.querySelector('main')

btn.addEventListener('click',function(){

    var div = document.createElement('div')

    var x = Math.random()*100
    var y = Math.random()*100
    var c1 = Math.floor (Math.random()*256)
    var c2 = Math.floor (Math.random()*256)
    var c3 = Math.floor (Math.random()*256)
    
    div.style.backgroundColor = `rgb(${c1} ,${c2} ,${c3})`
    

    div.style.height = '50px'
    div.style.width = '50px'
    div.style.position = 'absolute'
    div.style.left = x+'%'
    div.style.top = y+'%'

    main.appendChild(div)
})