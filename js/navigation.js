var nav = document.getElementById('mobile-nav');

var i = 0;

function navToggle() {
  i++;
  nav.style.display = "flex";
  document.getElementById('nav-icon').src = "images/icons/cross.svg";

  if (i>1) {
    nav.style.display = "";
    document.getElementById('nav-icon').src = "images/icons/menu.svg";
    i = 0;
  }
}
function navClose() {
    nav.style.display = "";
}
