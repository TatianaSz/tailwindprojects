const burger = document.getElementById("burger");
const afterClick = function(e){
let tog = document.getElementById("toToggle");
tog.classList.toggle("hidden");
}
burger.addEventListener("click", afterClick)
