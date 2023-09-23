const menuNav = document.getElementById("menu-nav");
const btnMenu = document.getElementById("btn-menu-nav");
const btnClose = document.getElementById("btn-menu-close");


function displayMenu(){
    menuNav.style.display = "flex";
}

btnMenu.addEventListener("click", displayMenu);

function displayMenuDesktop(){
    if(menuNav.style.display === "flex"){
        menuNav.style.display = "none";
    }
}

btnClose.addEventListener("click", closeMenu);

function closeMenu(){
    menuNav.style.display = "none"
}