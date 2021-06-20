const scrollBtn = document.querySelector(".top");
let dj = false;

window.addEventListener("scroll", function() {
    if (scrollY >= 100) {
        dj = true;
        scrollBtn.classList.add("aniBtnStart")
        scrollBtn.classList.remove("aniBtnEnd")
    } else if (scrollY < 100 && dj) {
        scrollBtn.classList.remove("aniBtnStart")
        scrollBtn.classList.add("aniBtnEnd")
        console.log("nice")
    }
})

scrollBtn.addEventListener("click", function() {
    window.scrollTo(0, 0);
})

// Responsive nav 

const nav = document.getElementById("nav2");
const menuB = document.querySelector("#nav2 .menub")
const menu = document.querySelector("#nav2 .menu")
const cross = document.querySelector(".cross");


menuB.addEventListener("click", function() {
    console.log("clicked")
    menu.classList.add("resNavStart");
    menu.classList.remove("resNavEnd");
    console.log("hello")

})

cross.addEventListener("click", function() {
    menu.classList.remove("resNavStart");
    menu.classList.add("resNavEnd");
})

//Preloader logic
const Preloader = document.querySelector(".preloader");
window.addEventListener("load", function() {
    console.log("Loaded");
    Preloader.classList.remove("beforeLoad");
})