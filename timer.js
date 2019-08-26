// Le Timer: creation d'un minuteur de 20 minutes

class Timer {
    constructor() {
        this.timerDuration = null;
        this.bookingData = document.getElementById("booking_data");
        this.time = document.getElementById("timing");
        this.interval = null;
    }

    startTimer(timerDuration) {
        this.timerDuration = timerDuration;
        this.interval = setInterval(() => {
            // initialisation de minutes/secondes afin d'obtenir une conversion des minutes en secondes, tout en gardant un affichage minutes : secondes 
            this.minutes = parseInt(this.timerDuration / 60, 10);
            this.seconds = parseInt(this.timerDuration % 60, 10);

            this.minutes = this.minutes < 10 ? "0" + this.minutes : this.minutes;
            this.seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;

            sessionStorage.setItem('secondes', this.seconds);
            sessionStorage.setItem('minutes', this.minutes);
            sessionStorage.setItem('timerDuration', this.timerDuration);

            this.time.textContent = " " + this.minutes + " : " + this.seconds;
            document.getElementById("adress").textContent = localStorage.getItem("localStation");
            document.getElementById("firstName").textContent = localStorage.getItem("firstName");
            document.getElementById("lastName").textContent = localStorage.getItem("lastName");

            this.timerDuration--;

            if (this.timerDuration < 0) {
            this.bookingData.textContent = ("Temps expiré. Reservation annulée.");
                this.timerDuration = 0;
            }
        }, 1000);
    }
    
    stopTimer() {
        clearInterval(this.interval);
    }
}