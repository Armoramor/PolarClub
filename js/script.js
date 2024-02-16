
// let nuage = document.getElementByid('troisiemeplan');
// let coline = document.getElementByid('deuxiemeplan');
// let sapin = document.getElementByid('premierplan');
// let title = document.getElementByid('title');
// let btn = document.getElementByid('btn');
// // let sect = document.getElementByid('sect');

window.addEventListener("scroll", function () {
    // let nuage = document.getElementById('troisiemeplan');
    let coline = document.getElementById('deuxiemeplan');
    // let sapin = document.getElementById('premierplan');
    // let title = document.getElementById('titleid');
    // let btn = document.getElementById('btn');
    // let sect = document.getElementById('sect');
    let value = window.scrollY;
    let lune = document.getElementById('lune');

    lune.style.top = value * 0.80 + "px";
    coline.style.top = value * 0.30 + 'px';



})
