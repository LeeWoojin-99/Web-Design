var list = document.querySelectorAll("#navigation li");
function activeLink(){
    list.forEach(i => i.classList.remove("hovered"));
    this.classList.add("hovered");
}
list.forEach(i => i.addEventListener("mouseover", activeLink));

var menu = document.querySelectorAll(".toggle");
var curve = document.querySelectorAll("#navigation ul li.hovered");
var main = document.querySelectorAll("#main");
function toggleMenu(){
    main.forEach(i => i.classList.toggle("off"));
    curve.forEach(i => i.classList.toggle("off"));
}
menu.forEach(i => i.addEventListener("click", toggleMenu));