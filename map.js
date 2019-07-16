var nancy = [48.6928222, 6.1811871];
// création de la map
var map = L.map("map").setView(nancy, 13);
// ajout du layer
L.tileLayer("https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png", {
           maxZoom: 20
}).addTo(map);

// ajout d'un markeur
var marker = L.marker(nancy).addTo(map);

// ajout d'un popup
marker.bindPopup("<h3> Nancy, France </h3>");