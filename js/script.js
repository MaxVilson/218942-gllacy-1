var link = document.querySelector(".modal-feedback");
var popup = document.querySelector(".feedback-form");
var close = document.querySelector(".button-close");
var body = document.querySelector(".body");
var overlay = document.querySelector(".overlay");
var login = popup.querySelector("[name=name]");
link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("show");
	login.focus();
	body.classList.add("overlay");
});
close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("show");
	body.classList.remove("overlay");
});
function initialize() {
  var mapOptions = {
    zoom: 15,
    center: new google.maps.LatLng(59.928794,30.323083)
  }
  var image = 'img/pin.png';

  var map = new google.maps.Map(document.getElementById('google-map'),
                                mapOptions);
  var myLatLng = new google.maps.LatLng(59.938794,30.323083);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}

if (google) {
  google.maps.event.addDomListener(window, 'load', initialize);
}

