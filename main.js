// 1) Access:
let stars = document.getElementById("stars")
let moon = document.getElementById("moon")
let mont3 = document.getElementById("mont3")
let mont4 = document.getElementById("mont4")
let river = document.getElementById("river")
let boat = document.getElementById("boat")
let novel = document.querySelector(".novel")

window.onscroll = function () {
    let value = scrollY;
    stars.style.left = value + "px";
    moon.style.top = value * 3 + "px";
    mont3.style.top = value * 2 + "px";
    mont4.style.top = value * 1.5 + "px";
    river.style.top = value + "px";
    boat.style.top = value + "px";
    boat.style.left = value  + "px";
    novel.style.fontSize = value  + "px";

    if (scrollY >= 67) {
        novel.style.fontSize = 67  + "px";
        novel.style.position = "fixed";
        if (scrollY >= 274) {
            novel.style.display = "none"
        } else {
            novel.style.display = "block"
        }
        if (scrollY >= 136) {
            document.querySelector(".main").style.background = "linear-gradient(#376281,#10001f )"
        }    else {
             document.querySelector(".main").style.background = "linear-gradient(#200016,#10001f )"
            }
        
    } 
}