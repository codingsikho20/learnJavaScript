// var a = Math.floor(Math.random()*1000)

// console.log(a)

// var btn = document.querySelector('button')
// var box = document.querySelector('#box')

// btn.addEventListener('click', function(){
//     var c1 = Math.floor(Math.random()*255)
//     var c2 = Math.floor(Math.random()*255)
//     var c3 = Math.floor(Math.random()*255)
    
//     box.style.backgroundColor = `rgb(${c1},${c2},${c3})`
    
// })


// let arr = ['yashawant', 'kishan', 'kamaran', 'ashish', 'vikesh', 'raju', 'lilaoti', 'ranimukharji']

// let a = Math.floor(Math.random()*arr.length)
// console.log(arr[a]);

// find arr lenth 

// var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 123]

// console.log(arr.length-1);

var arr = [
    {
        team: 'csk',
        primary: 'yellow',
        secondary: 'black'
    },

    {
        team: 'RCB',
        primary: 'red',
        secondary: 'black'
    },

    {
        team: 'MI',
        primary: 'blue',
        secondary: 'gold'
    },

    {
        team: 'KKR',
        primary: 'purple',
        secondary: 'gold'
    },

    {
        team: 'SRH',
        primary: 'red',
        secondary: 'black'
    },

    {
        team: 'PBK',
        primary: 'orenge',
        secondary: 'blue'
    }

]

var btn = document.querySelector('button')
var h1 = document.querySelector('h1')

var body = document.querySelector('body')

btn.addEventListener('click', function(){
    var winner = arr[Math.floor(Math.random()*arr.length)]
    h1.innerHTML = winner.team
    h1.style.backgroundColor = winner.secondary
    body.style.backgroundColor = winner.primary
})



