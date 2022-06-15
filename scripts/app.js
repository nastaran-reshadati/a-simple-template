let navBtn = document.querySelector(".nav__btn");
let navMenu = document.querySelector(".nav-menu");
let navOpen = false;

navBtn.addEventListener("click", function(){
    if(navOpen == true){
        navBtn.classList.remove("nav__btn--open");
        navOpen = false;
        navMenu.classList.remove("nav-menu--open");
        // navMenu.style.left="-26rem";
    }else{
        navBtn.classList.add("nav__btn--open");
        navOpen = true;
        navMenu.classList.add("nav-menu--open");
        // navMenu.style.left = 0;

    }
})
// navMenu.addEventListener