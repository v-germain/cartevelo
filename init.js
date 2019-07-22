var nancy = [48.685579, 6.1914181];
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

// recuperation données API
const ajax = new Ajax();
ajax.ajaxGet("https://api.jcdecaux.com/vls/v3/stations?contract=nancy&apiKey=c75bc96bb4a5b84123aedf5b20b8fbf3a676e4d3", reponse => {
    const stations = JSON.parse(reponse);
        console.log(stations);
    stations.forEach(function (station) {
        console.log(station.name, station.totalStands.availabilities.bikes ); 
        console.log(station.position.latitude, station.position.longitude);
        L.marker([station.position.latitude, station.position.longitude]).addTo(map);
                     });
});



//création d'une classe station
class station {
    constructor(nom, adresse, position, stockVelo) {
        this.nom = station.name;
        this.adresse = station.adress;
        this.position = station.position;
        this.stockVelo = station.totalStands.availabilities.bikes;
    }
 //   //création des marqueurs par station
 //   stations.forEach(station =>
 //       function createMarker() {
 //       
 //   })
}