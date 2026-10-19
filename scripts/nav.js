let abierto = document.getElementById("nav-lat").style.width == "250px"
const cerrarNav = document.getElementById('btn_nav');
const abrirNav = document.getElementById('btn_open_nav');
cerrarNav.addEventListener('click', cerrarNav());
abrirNav.addEventListener('click', abrirNav());

function abrirNav() {
  document.getElementById("nav-lat").style.width = "250px";
  document.querySelector("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function cerrarNav() {
  document.getElementById("nav-lat").style.width = "0";
  document.querySelector("main").style.marginLeft = "0";
}