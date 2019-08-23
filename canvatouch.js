class Canvas {
 
//a rajouter à la classe canvas pour utilisation avec un pad tactile (smartphone/tablette)
    
    getTouchPosition(e) {
        let rect = this.canvas.getBoundingClientRect(e);
        return {
          x: (e.touches['0'].clientX - rect.left) * (this.canvas.width / rect.width),
          y: (e.touches['0'].clientY - rect.top) * (this.canvas.height / rect.height);
        }
    }

    signature() {
        this.canvas.addEventListener(`touchstart`, (e) => {
            let touchesPosition = this.getTouchPosition(e);
            this.draw = true;
            this.ctx.lineWidth = 2;
            this.ctx.moveTo(touchesPosition.x, touchesPosition.y);
            this.ctx.beginPath();
        });
        this.canvas.addEventListener(`touchmove`, (e) => {
            let touchesPosition = this.getTouchPosition(e);
            this.ctx.lineTo(touchesPosition.x, touchesPosition.y);
            this.ctx.stroke();
            });
        this.canvas.addEventListener(`touchend`, (e) => {
            this.draw = false;
        });
    };
};