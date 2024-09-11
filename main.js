var btn=document.querySelector(".btn")
var box=document.querySelector(".box")
var container=document.querySelector(".container")
var colorcode=document.querySelector("p")
btn.addEventListener("click",function(){
    var rngcolor=Math.floor(Math.random()*16777215).toString(16)
    box.style.backgroundColor=`#${rngcolor}`
    colorcode.innerHTML=`Color Code:#${rngcolor}`
})