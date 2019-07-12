function ajaxGet(url, callback) {
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            // Appelle la fonction callback en lui passant la réponse de la requête
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    req.send(null);
}

ajaxGet("https://api.jcdecaux.com/vls/v3/stations?contract=nancy&apiKey=c75bc96bb4a5b84123aedf5b20b8fbf3a676e4d3", reponse => {
    const stations = JSON.parse(reponse);
        console.log(stations);
    stations.forEach(function (station) {
        console.log(station.name, station.totalStands.availabilities.bikes ); 
                     });
});