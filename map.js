class Map {
    constructor() {
        const nancy = [48.685579, 6.1914181];
        // création de la map
        this.map = L.map("map").setView(nancy, 13);
        // ajout du layer
        L.tileLayer("https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png", {
                   maxZoom: 20
        }).addTo(this.map);
        this.bike = null;
        this.booking1 = document.getElementById("booking1");
        this.booking2 = document.getElementById("booking2");
        this.encart = document.getElementById("encart");
        this.stationInfo = document.getElementById("station_info");
        this.userInfo = document.getElementById("user_info");
        this.canvaContainer = document.getElementById("canvas_container");
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
                const marker = L.marker([station.position.latitude, station.position.longitude]).addTo(this.map);
                marker.addEventListener("click", () => {
                    document.getElementById("location").textContent = station.address;
                    document.getElementById("room").textContent = station.totalStands.capacity;
                    document.getElementById("availability").textContent = station.totalStands.availabilities.bikes;
                    this.bike = station.totalStands.availabilities.bikes;
                    // (ré)initialisation des affichages des différentes parties
                    this.booking1.classList.remove("none");
                    this.booking1.classList.add("display");
                    this.encart.classList.add("display");
                    this.encart.classList.remove("none");
                    this.stationInfo.classList.remove("none");
                    this.stationInfo.classList.add("display");
                    this.canvaContainer.classList.remove("display");
                    this.canvaContainer.classList.add("none");
                    this.userInfo.classList.remove("display");
                    this.userInfo.classList.add("none");
                });             
            });
        });
        
        this.booking1 = document.getElementById("booking1");
        this.booking1.addEventListener("click", () => {
            if (this.bike === 0) {
                alert("Plus de vélos disponible dans cette station");
            } else {
                this.stationInfo.classList.remove("display");
                this.stationInfo.classList.add("none");
                this.userInfo.classList.remove("none");
                this.userInfo.classList.add("display");
                const localStation = document.getElementById("location").textContent;
                localStorage.setItem("localStation", localStation);
            }
        });
        this.booking2 = document.getElementById("booking2");
        this.booking2.addEventListener("click", () => {
            const validate = /^[A-Za-zéèêëç]+$/;
            const lastName = document.getElementById("lastname").value;
            const firstName = document.getElementById("firstname").value;
            if (validate.test(lastName) === false || validate.test(firstName) === false) {
                alert("Veuillez renseigner votre nom et prénom");
            } else {
                localStorage.setItem("lastName", lastName);
                localStorage.setItem("firstName", firstName);
                //console.log(localStorage.getItem("firstName"), localStorage.getItem("lastName"));
                this.encart.classList.remove("display");
                this.encart.classList.add("none");
                this.canvaContainer.classList.remove("none");
                this.canvaContainer.classList.add("display");
                this.userInfo.classList.remove("display");
                this.userInfo.classList.add("none");
            }
        });
    }
}