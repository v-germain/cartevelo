const ajax = new Ajax();
ajax.ajaxGet("https://api.jcdecaux.com/vls/v3/stations?contract=nancy&apiKey=c75bc96bb4a5b84123aedf5b20b8fbf3a676e4d3", reponse => {
    const stations = JSON.parse(reponse);
        console.log(stations);
    stations.forEach(function (station) {
        console.log(station.name, station.totalStands.availabilities.bikes ); 
                     });
});