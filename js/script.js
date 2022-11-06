let headerMenu = document.querySelector('.header__menu');
let headerBurger = document.querySelector('.header__burger');
headerBurger.addEventListener("click", function(){
    headerBurger.classList.toggle("active");
    headerMenu.classList.toggle("active");
});