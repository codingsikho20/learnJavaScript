// let main = document.querySelector('main')

//first project

// let chutki = document.querySelector('img')
// let msg = document.querySelector('h2 span')

// chutki.addEventListener('mouseenter', function(){
//     msg.innerHTML = 'chutki se door raho madharchodo wo meri jaan hai😡'
// })

// chutki.addEventListener('mouseleave', function(){
//     msg.innerHTML = 'chale jao yaha se fir chutki ko kabhi hath mat lagana🤬'
// })

// second project

// let cursor = document.querySelector('#cursor')

// main.addEventListener('mousemove', function(dets){
//     cursor.style.left = dets.x + 'px'
//     cursor.style.top = dets.y + 'px'
// })

//third project

var body = document.body
var h1 = document.querySelector('h1')
body.addEventListener('keydown', function(dets){
    h1.innerHTML = dets.code
    
})