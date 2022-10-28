window.onload = function(){

    var toggle = document.getElementById("toggle");
    var menu = document.getElementById("menu");
    toggle.onclick = function(){
        if(toggle.classList.contains("on")){
            toggle.className = "";
            menu.className = "";
            console.log("on");
        }else{
            toggle.className = "on";
            menu.className = "on";
            console.log("off");
        }
    }
}


