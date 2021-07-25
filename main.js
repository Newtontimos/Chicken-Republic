const mobileMenuIcon = document.querySelector(".js-mobile-menu-icon")
const mobileNavLinks = document.querySelector(".js-mobile-nav-links")
const closeIcon = document.querySelector(".js-close-icon")

mobileMenuIcon.addEventListener("click", () => {
    mobileNavLinks.classList.add("show-links")
})

closeIcon.addEventListener("click", () => {
    mobileNavLinks.classList.remove("show-links")
})