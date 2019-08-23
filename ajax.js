class Ajax { 
    ajaxGet(url, callback) {
        var req = new XMLHttpRequest(); // Création d'une requête HTTP
        req.open("GET", url); // Requête HTTP GET synchrone
        req.addEventListener("load", function () { // Appelle la fonction callback en lui passant la réponse de la requête
            if (req.status >= 200 && req.status < 400) { // if temps de réponse ok
                callback(req.responseText);
            } else {
                console.error(req.status + " " + req.statusText + " " + url);
            }
        });
        req.addEventListener("error", function () {
            console.error("Erreur réseau avec l'URL " + url);
        });
        req.send(null); // Envoi de la requête
    }
}