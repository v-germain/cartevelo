// création d'une classe canvas
class Canvas {
    constructor(timer) {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.draw = false;
        this.signature();
        this.count = 0;
        this.canvasContainer = document.getElementById("canvas_container");
        this.bookingData = document.getElementById("booking_data");
        this.timer = timer;
    }
    // récupération de la position de la souris par rapport au viewport
    getMousePosition(e) {
        let rectangle = this.canvas.getBoundingClientRect(e);
        return {
            x: e.offsetX - rectangle.left,
            y: e.offsetY - rectangle.top,
        }   
    }
    // récupération de la position du pointeur en tactile
    getTouchPosition(e) {
        let rect = this.canvas.getBoundingClientRect(e);
        return {
          x: (e.touches['0'].clientX - rect.left) * (this.canvas.width / rect.width),
          y: (e.touches['0'].clientY - rect.top) * (this.canvas.height / rect.height),
        }
    }
    // création de la fonction pour tracer avec la position de la souris
    signature() {
        this.canvas.addEventListener("mousedown", (e) => {
            let mousePosition = this.getMousePosition(e);
            this.draw = true;
            this.ctx.lineWidth = 2;
            this.ctx.moveTo(mousePosition.x, mousePosition.y);
            this.ctx.beginPath();
        });
        this.canvas.addEventListener("mousemove", (e) => {
            // mousemove + draw = true => lancement de la la fonction
            if (this.draw === true) {
                this.ctx.lineTo(e.offsetX, e.offsetY);
                // méthode stroke pour dessiner le chemin défini avec lineTo
                this.ctx.stroke();
                this.count++;
            }
        });
        //fin du clique, draw = false, fin de la signature
        this.canvas.addEventListener("mouseup", (e) => {
          this.draw = false;
        });
        // début du tracé tactile
        this.canvas.addEventListener("touchstart", (e) => {
            let touchesPosition = this.getTouchPosition(e);
            this.draw = true;
            this.ctx.lineWidth = 2;
            this.ctx.moveTo(touchesPosition.x, touchesPosition.y);
            this.ctx.beginPath();
            e.preventDefault(); // évite que la fenêtre bouge lors de la signature
        });
        // déplacement sur axe x/y et début du tracé
        this.canvas.addEventListener("touchmove", (e) => {
            let touchesPosition = this.getTouchPosition(e);
            this.ctx.lineTo(touchesPosition.x, touchesPosition.y);
            this.ctx.stroke();
            this.count++;
            e.preventDefault(); // évite que la fenêtre bouge lors de la signature
            });
        // draw = false, fin du trait
        this.canvas.addEventListener("touchend", (e) => {
            this.draw = false;
            e.preventDefault(); // évite que la fenêtre bouge lors de la signature
        });
        document.getElementById("validation").addEventListener("click", () => {
            if (this.count === 0) {
                alert("Veuillez entrer votre signature");
            } else {
                // réintialisation du tracé lors de la validation
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.timer.stopTimer();
                // initialisation du timer
                this.timer.startTimer(1200);
                this.bookingData.classList.remove("none");
                this.bookingData.classList.add("display");
                this.canvasContainer.classList.remove("display");
                this.canvasContainer.classList.add("none");
            }
        });
    };
}