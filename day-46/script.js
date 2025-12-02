var img = document.querySelector("img");
var heart = document.querySelector("#heart");

img.addEventListener("dblclick", function(){
    
    heart.style.opacity = '1'

    setTimeout(function(){
        heart.style.transform = 'translate(-50%,-300%) scale(1)'
    }, 800)

})