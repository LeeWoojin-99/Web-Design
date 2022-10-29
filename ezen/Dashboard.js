var list = document.querySelectorAll("#navigation li");
function activeLink(){
    list.forEach(i => i.classList.remove("hovered"));
    this.classList.add("hovered");
}
list.forEach(i => i.addEventListener("mouseover", activeLink));

var menu = document.querySelector(".toggle");
var navigation = document.querySelector("#navigation");
var main = document.querySelector("#main");
menu.onclick = function(){
    navigation.classList.toggle("active");
    main.classList.toggle("active");
}
