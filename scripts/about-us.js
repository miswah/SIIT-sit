document.body.style.zoom = '80%';

var myNav = document.getElementById("nav");

window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 650 || document.documentElement.scrollTop >= 650) {
    myNav.classList.add("scroll");
  } else {
    myNav.classList.remove("scroll");
  }
};