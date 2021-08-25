const burger = document.getElementById("burger");

const afterClick = function(e){
let tog = document.getElementById("toToggle");
const iconBurger = document.querySelector(".fafaIcon");
tog.classList.toggle("hidden");
let x = iconBurger.classList.contains("fa-bars")
switch(x){
    case true:
    iconBurger.classList.remove("fa-bars")
    iconBurger.classList.add("fa-times")
    break;
    case false:
    iconBurger.classList.remove("fa-times")
    iconBurger.classList.add("fa-bars")    
    break;
}

}
burger.addEventListener("click", afterClick)




//fas fa-bars burger fas fa-times - x 
