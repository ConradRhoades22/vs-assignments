var header = document.getElementById("header")
var title = document.createElement("h1")
title.textContent = "JavaScript Made This!!"
header.append(title)
title.style.textAlign = "center"

var subtitle = document.createElement("h2")
subtitle.innerHTML = "<span style='color:orange'>Conrad</span> wrote the JavaScript"
header.append(subtitle)
subtitle.style.textAlign = "center"

var msg = document.getElementsByClassName("message")
var person1 = document.querySelectorAll("left")
var person2 = document.querySelectorAll("right")
msg[0].textContent="Hey."
msg[1].textContent="What's up?"
msg[2].textContent="Nothing much, just chilling"
msg[3].textContent="Cool. same here."

var msgs = document.getElementsByClassName("messages")
var clear = document.getElementById("clear-button")
clear.addEventListener("click", function(){
msgs[0].innerHTML=""
})

//var tdd = document.getElementById("theme-drop-down")
//tdd.addEventListener("click", function(){
//     if (tdd.value="theme-one") {
// msgs[0].classList.remove("two")
// } else{ 
//     msgs.classList.add("two")
// }
//})

