class Map {
    constructor() {
        const nancy = [48.685579, 6.1914181];
        // création de la map
        this.map = L.map("map").setView(nancy, 13);
        // ajout du layer
        L.tileLayer("https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png", {
                   maxZoom: 20
        }).addTo(this.map);

        /* ajout d'un markeur
        var marker = L.marker(nancy).addTo(map);

        ajout d'un popup
        marker.bindPopup("<h3> Nancy, France </h3>");*/
    }
    
        // recuperation données API
    createMarkers() {
        const ajax = new Ajax();
        ajax.ajaxGet("https://api.jcdecaux.com/vls/v3/stations?contract=nancy&apiKey=c75bc96bb4a5b84123aedf5b20b8fbf3a676e4d3", reponse => {
            const stations = JSON.parse(reponse);
            console.log(stations);
            stations.forEach(station => {               
                //console.log(station.name, station.totalStands.availabilities.bikes ); 
                //console.log(station.position.latitude, station.position.longitude);
                const marker = L.marker([station.position.latitude, station.position.longitude]).addTo(this.map);
                marker.addEventListener("click", () => {
                    document.getElementById("location").textContent = station.address;
                    document.getElementById("room").textContent = station.totalStands.capacity;
                    document.getElementById("availability").textContent = station.totalStands.availabilities.bikes;
                })             
            });
        });
    }
}

/* global sessionStorage */

const bookingButton = document.getElementById("booking");

bookingButton.addEventListener("click", () => {
    const lastName = document.getElementById("lastname").value;
    const firstName = document.getElementById("firstname").value;
    const localStation = document.getElementById("location").value;
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("location", localStation);
    console.log(localStorage.getItem("firstName"), localStorage.getItem("lastName"));
    document.getElementById("canvas_container").classList.remove("none");
    document.getElementById("canvas_container").classList.add("display");
});
