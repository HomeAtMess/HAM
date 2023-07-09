const hamb = document.querySelector(".hamburger");
// const navmenu = document.querySelector(".items");
const navMenu = document.querySelector(".nav-menu");

hamb.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamb.classList.toggle("active");
    navMenu.classList.toggle("active");
}
function visitFile() {
    window.location.href = "Main.html";
}
function visitback() {
    window.location.href = "index.html";
}
// hamb.addEventListener("click", () => {
//     hamb.classList.toggle("active");
//     navmenu.classList.toggle("active");
// });
// document.querySelectorAll(".nav-link1").forEach((n) =>
//     n.addEventListener("click", () => {
//         hamb.classList.remove("active");
//         navmenu.classList.remove("active");
//     })
// );

// window.addEventListener("scroll", function () {
//     var header = document.querySelector(".navbar1");
//     header.classList.toggle("sticky", window.scrollY > 0);
// });
