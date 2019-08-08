// création d'une classe canvas
class Canvas {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.draw = false;
    this.signature();
  }
    // récupération de la position de la souris par rapport au viewport
    getMousePosition(e) {
        let rectangle = this.canvas.getBoundingClientRect(e);
        return {
            x: e.offsetX - rectangle.left,
            y: e.offsetY - rectangle.top,
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
            }
        });

        //fin du clique, draw = false, fin de la signature
        this.canvas.addEventListener('mouseup', (e) => {
          this.draw = false;
        });
            
        document.getElementById("booking").addEventListener("click", () => {
        document.getElementById("canvas_container").classList.remove("none");
        document.getElementById("canvas_container").classList.add("display");
    })

    }
}