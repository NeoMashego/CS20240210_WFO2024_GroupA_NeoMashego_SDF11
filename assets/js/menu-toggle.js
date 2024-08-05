let menuToggle = document.getElementById("mobile-menu-toggle");
let mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", function(){
    mobileMenu.classList.toggle("hidden")
})