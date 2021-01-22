
document.body.style.zoom = '80%';

var myNav = document.getElementById("nav");

window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 1000 || document.documentElement.scrollTop >= 1000) {
    myNav.classList.add("scroll");
  } else {
    myNav.classList.remove("scroll");
  }
};




// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 22.64731, lng: 88.42327 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
