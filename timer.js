// Le Timer: creation d'un minuteur de 20 minutes

class Timer {
    constructor(timerDuration) {
        this.timerDuration = timerDuration;
        this.validation = document.getElementById("validation");
        this.bookingData = document.getElementById("booking_data");
        this.time = document.getElementById("timing");
        this.canvasContainer = document.getElementById("canvas_container");
        this.startTimer();
    }

    startTimer() {

            const x = setInterval(() => {

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

            this.validation.addEventListener("click", (e) => {
                clearInterval(x);
                const time1 = new Timer(1200, this.time);
                this.bookingData.classList.remove("none");
                this.bookingData.classList.add("display");
                this.canvasContainer.classList.remove("display");
                this.canvasContainer.classList.add("none");
            });
    }
}