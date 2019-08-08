// Le Timer: creation d'un minuteur de 20 minutes

class Timer {
    constructor(tempsTimer) {
        this.tempsTimer = tempsTimer;
        this.validation = document.getElementById("validation");
        this.bookingData = document.getElementById("booking_data");
        this.time = document.getElementById("timing");
        this.startTimer();
    }

    startTimer() {

            const x = setInterval(() => {

                this.minutes = parseInt(this.tempsTimer / 60, 10);
                this.seconds = parseInt(this.tempsTimer % 60, 10);

                this.minutes = this.minutes < 10 ? "0" + this.minutes : this.minutes;
                this.seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;

                sessionStorage.setItem('secondes', this.seconds);
                sessionStorage.setItem('minutes', this.minutes);
                sessionStorage.setItem('tempsTimer', this.tempsTimer);

                this.time.textContent = " " + this.minutes + " : " + this.seconds;
                document.getElementById("adress").textContent = localStorage.getItem("localStation");
                document.getElementById("firstName").textContent = localStorage.getItem("firstName");
                document.getElementById("lastName").textContent = localStorage.getItem("lastName");

                this.tempsTimer--;

                //if (this.tempsTimer < 0) {
                //this.bookingData.textContent = ("Temps expiré. Reservation annulée.")
                //    this.tempsTimer = 0
                //}
            }, 1000);

            this.validation.addEventListener("click", (e) => {
                clearInterval(x);
                const time1 = new Timer(1200, this.time);              
            });
    }
}


/*const validation = document.getElementById("validation"); // TO DO remplacer par validation button sur signature

//affichage de l'encart de réservation
validation.addEventListener("click", () => {
    document.getElementById("timer").classList.remove("none");
    document.getElementById("timer").classList.add("display");
    //document.getElementById("adress").textContent = station.adress;
    document.getElementById("firstName").textContent = localStorage.getItem("firstName");
    document.getElementById("lastName").textContent = localStorage.getItem("lastName");

    // TO DO section a déplacer sur validation button sur signature
    document.getElementById("timer").classList.remove("none");
    document.getElementById("timer").classList.add("display");
    var timer = document.getElementById("timing");
    function minus() {
        var compteur = Number(timer.textContent);
        if (compteur > 0) {
            timer.textContent = compteur -1;
        } else {
            clearInterval(intervalId);
            document.getElementById("timer").textContent = ("réservation expirée");
            document.getElementById("timer").classList.remove("display");
            document.getElementById("timer").classList.add("none");
        }
    };
});
//var intervalId = setInterval(minus, 100000);*/