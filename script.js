let navList = document.getElementById('navList');
let navMenu = document.getElementById('navMenu');
let hamburger = document.getElementById('barss');

hamburger.addEventListener("click", () =>{
    hamburger.classList.style('active');
    navList.classList.toggle('active');
})