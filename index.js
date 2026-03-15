var offerclose=document.getElementById("offerclose")
var offertag=document.getElementById("offertag")
offerclose.addEventListener("click",function(){
    offertag.style.display="none"
})
let slider = document.querySelector(".slider")
let slides = document.querySelectorAll(".slide")

let next = document.getElementById("angleright")
let prev = document.getElementById("angleleft")

let index = 0

next.onclick = function () {

    index++

    if(index >= slides.length){
        index = 0
    }

    slider.style.transform = "translateX(-" + index * 100 + "%)"
}

prev.onclick = function () {

    index--

    if(index < 0){
        index = slides.length - 1
    }

    slider.style.transform = "translateX(-" + index * 100 + "%)"
}
var hearts = document.querySelectorAll(".blackheart")

hearts.forEach(function(heart){

    heart.addEventListener("click", function(){

heart.classList.toggle("fa-solid")
    })

})