class Slider {
    constructor() {
        this.elementImgSlider = document.getElementById("imgSlider");
        this.elementPrev = document.getElementById("prev");
        this.elementNext = document.getElementById("next");
        this.play = document.getElementById("play");
        this.stop = document.getElementById("stop");
        this.imagesTab = ["images/slide1.jpg", "images/slide2.jpg", "images/slide3.jpg", "images/slide4.jpg", "images/slide5.jpg"];
        this.counter = 0;
        this.interval = 0;
        this.init();
    }
    next() {
        this.counter++;
        if (this.counter >= this.imagesTab.length) {
            this.counter = 0;
        } // si counter > longueur du tableau, counter = 0 retour au début du tableau
        this.elementImgSlider.src = this.imagesTab[this.counter];
    }
    prev() {
        this.counter--;
        if (this.counter < 0) {
            this.counter = this.imagesTab.length - 1;
        } // si counter < 0, counter = longueur du tableau -1 affichage de la derniere slide
        this.elementImgSlider.src = this.imagesTab[this.counter];
    }
    start() {
        clearInterval(this.interval);
        this.interval = setInterval(() => {this.next()}, 5000);   
    }

    pause() {
        clearInterval(this.interval);
    }
    init() {
        this.elementNext.addEventListener("click", () => this.next());
        this.elementPrev.addEventListener("click", () => this.prev());
        document.addEventListener("keydown", event => {
            if (event.key === "ArrowRight") this.next();
            if (event.key === "ArrowLeft") this.prev();
        });
        this.play.addEventListener("click", () => {
            this.start();
            this.stop.classList.remove("none");
            this.stop.classList.add("display");
            this.play.classList.remove("display");
            this.play.classList.add("none");
        });
        this.stop.addEventListener("click", () => {
            this.pause();
            this.stop.classList.remove("display");
            this.stop.classList.add("none");
            this.play.classList.remove("none");
            this.play.classList.add("display");   
        });
        this.interval = setInterval(() => {this.next()}, 5000);
    }
}