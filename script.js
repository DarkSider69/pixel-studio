const burgerMenuIcon = document.querySelector(".burgerMenuIcon")
const burgerMenuContainer = document.querySelector(".burgerMenuContainer")
const closeMenuIcon = document.querySelector(".closeIconMenu")
const burgerMenuNavigation = document.querySelector(".burgerMenuNavigation")
const burgerChangeLanguage = document.querySelector(".burgerChangeLanguage")
const burgerContactMe = document.querySelector(".burgerContactMe")

burgerMenuIcon.addEventListener("click", function() {
    burgerMenuIcon.style.display = "none"
    closeMenuIcon.style.display = "flex"
    burgerMenuContainer.style.display = "flex"
    burgerMenuNavigation.style.display = "flex"
    burgerMenuNavigation.style.display = "flex"
    burgerContactMe.style.display = "block"
})

closeMenuIcon.addEventListener("click", function() {
    burgerMenuIcon.style.display = "flex"
    closeMenuIcon.style.display = "none"
    burgerMenuContainer.style.display = "none"
})


// scrollup function 
const scrollUp = document.querySelector(".scrollUp")

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.documentElement.scrollTop > 700) {
        scrollUp.style.display = "block";
    } else {
        scrollUp.style.display = "none";
    }
  }
  
  function topFunction() {
    document.documentElement.scrollTop = 0;
}

scrollUp.addEventListener("click", function() {
    document.documentElement.scrollTop = 0;
})




