document.getElementById("hamburger-icon").addEventListener("click", function () {

    document.getElementById("hamburger-list").classList.toggle("active")

});
const icon = document.querySelector("hamburger-menu");
const menu = document.querySelector(".hamburger-links");
menu.classList.toggle("active");
icon.classList.toggle("active");