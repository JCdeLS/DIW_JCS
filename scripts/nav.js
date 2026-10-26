//let abierto = document.getElementById("nav-lat").style.width == "250px"
const cerrarNav = document.getElementById('btn_nav');
const abrirNav = document.getElementById('btn_open_nav')

cerrarNav.addEventListener('click', ()=>{
  document.getElementById("nav-lat").style.width = "0";
  document.querySelector("main").style.marginLeft = "0";
});

abrirNav.addEventListener('click', ()=>{
  document.getElementById("nav-lat").style.width = "250px";
  document.querySelector("main").style.marginLeft = "250px";
});