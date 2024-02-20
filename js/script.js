

window.addEventListener("scroll", function () {
    let coline = document.getElementById('deuxiemeplan');
    let value = window.scrollY;
    let lune = document.getElementById('lune');

    lune.style.top = value * 0.80 + "px";
    coline.style.top = value * 0.30 + 'px';



})
const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector('.nav-links');

menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu')
})