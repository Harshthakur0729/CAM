gsap.from("#h1", {
    width: 0,
    y: -50,
    ease: Expo.ease,
    duration: 2,
    opacity: 0
})


gsap.from("#P1", {
    width: 0,
    y: -50,
    ease: Expo.ease,
    duration: 2,
    opacity: 0
})


gsap.from("#h2", {
    delay: 1,
    x: -100,
    ease: Expo.ease,
    duration: 2,
    opacity: 0
})


gsap.from("#h3", {
    delay: 1.8,
    x: -70,
    ease: Expo.ease,
    duration: 2.3,
    opacity: 0
})


gsap.from("#p2", {
    delay: 1.8,
    x: -70,
    ease: Expo.ease,
    duration: 2,
    opacity: 0
})

gsap.to("#button01", {
    delay: 3,
    duration: 1,
    font: 15,
    opacity: 1
})

gsap.from(".ui", {
    width: 1000,
    y: -50,
    ease: Expo.ease,
    duration: 2,
    opacity: 0
})


gsap.from("#one", {
    y: -50,
    ease: Expo.ease,
    duration: 2,
    opacity: 0
})


gsap.from("#two", {
    y: -50,
    ease: Expo.ease,
    duration: 2,
    opacity: 0
})

gsap.from("#cch", {
    x: 50,
    ease: Expo.ease,
    duration: 2,
    opacity: 0
})

gsap.from("#h001,#h002,#h003", {
    x: 50,
    ease: Expo.ease,
    duration: 2,
    opacity: 0,
    delay:2.5,
})



gsap.from("#ee,#ee01,#ee02", {
    y: -20 ,
    x:-30,
    ease: Expo.ease,
    duration: 2,
    delay:3,
    opacity: 0
})


gsap.from("#bb", {
    x: 50,
    ease: Expo.ease,
    duration: 2,
    opacity: 0
})

gsap.from("#bb2", {
    x: -150,
    ease: Expo.ease,
    duration: 3,
    opacity: 0
})

gsap.from("#cc01", {
    y : 50,
    ease: Expo.ease,
    duration: 2,
    opacity:0,
    rotation:360
})



var btn =document.querySelector("#two")
var TOM =document.querySelector("#tom")
var Lod=document.querySelector("#loading")
// Lod.addEventListener("")
btn.addEventListener("click",function(){
TOM.style.display="initial"
TOM3.style.display="none"
gsap.from("#tom", {
    y: 10,
    ease: Expo.ease,
    duration: 1,
   display:"initial"
})
})


var btn2 =document.querySelector("#cancel")
btn2.addEventListener("click",  function(elem){
    TOM.style.display="none"
    TOM2.style.display ="inherit"
})


var btn3 =document.querySelector("#SUBMIT")
var TOM2 =document.querySelector("#tom2")
btn3.addEventListener("click",function(one){
    btn3.style.backgroundColor = "#fff"
    TOM2.style.display ="none"
    // Lod.style.display="initial"

})


var btn4 =document.querySelector("#one")
var TOM3 =document.querySelector("#tom3")
btn4.addEventListener("click",function(kkr){
TOM3.style.display="initial"
TOM.style.display="none"
gsap.from("#tom3", {
    y: 10,
    ease: Expo.ease,
    duration: 1,
    // opacity: 9,
   display:"initial"
})
})

var btn3 =document.querySelector("#cancel2")
btn3.addEventListener("click",  function(elem){
    TOM3.style.display="none"
    
})

