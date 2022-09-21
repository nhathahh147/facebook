var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");

function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");
}
darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-them");

    if(localStorage.getItem("them") == "light"){
        localStorage.setItem("them", "dark");
    }
    else{
        localStorage.setItem("them", "light");
    }

}


if(localStorage.getItem("them") == "light"){
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-them");
}
else if(localStorage.getItem("them") == "dark"){
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-them");
}
else{
    localStorage.setItem("them", "light");
}