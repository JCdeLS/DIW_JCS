//let abierto = document.getElementById("nav-lat").style.width == "250px"
const cerrarNav = document.getElementById('btn_nav');
const abrirNav = document.getElementById('btn_open_nav')

cerrarNav.addEventListener('click', ()=>{
  document.getElementById("nav-lat").style.width = "0";
  document.querySelector("main").style.paddingLeft = "1rem";
  document.querySelector("header").style.opacity = 1;
  document.querySelector("main").style.opacity = 1;
  document.querySelector("footer").style.opacity = 1;
  document.body.classList.toggle('no-scroll');
});

abrirNav.addEventListener('click', ()=>{
  document.getElementById("nav-lat").style.width = "250px";
  document.querySelector("main").style.paddingLeft = "250px";
  document.querySelector("header").style.opacity = 0.5;
  document.querySelector("main").style.opacity = 0.5;
  document.querySelector("footer").style.opacity = 0.5;
  document.body.classList.toggle('no-scroll');
});

window.addEventListener('pagehide', () => {
  document.getElementById("nav-lat").style.width = "0";
  document.querySelector("main").style.paddingLeft = "1rem";
  document.querySelector("header").style.opacity = 1;
  document.querySelector("main").style.opacity = 1;
  document.querySelector("footer").style.opacity = 1;
});