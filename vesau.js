class vesau{
    constructor(game) {
        this.game = game;
        this.x = 0;
        this.y = 0;
        this.grid = 20;
        this.dx = this.grid;
        this.dy = 0;
        this.cell = [];
        this.maxCells = 2;
        this.score =0;
    }
    update(){
        if (this.endGame()){
          this.x += this.dx;
          this.y += this.dy;
        }

        this.cell.unshift({x: this.x, y: this.y});
        if (this.cell.length > this.maxCells){
            this.cell.pop();
        }

        this.catchHandle();

    }
    draw(){
        for (let i=0; i<this.cell.length; i++){
           this.game.context.fillStyle = 'white';
           this.game.context.fillRect(this.cell[i].x, this.cell[i].y, this.grid, this.grid);
        }
        if (this.endGame()==false){
            this.game.context.font = '40px Calibri';
            this.game.context.fillText("gêm âu vờ haha", 100, 200);
            this.game.context.fillText("điểm của bạn là: " + this.score,70,100);
        }
    }
    catchHandle(){
        document.addEventListener('keydown', (e) =>{
            if (e.which == 37 && this.dx ==0){
                this.dx = -this.grid;
                this.dy = 0;
            }
            else if (e.which == 38 && this.dy ==0){
                this.dx =0;
                this.dy = -this.grid;
            }
            else if (e.which == 39 && this.dx ==0){
                this.dx = +this.grid;
                this.dy = 0;
            }
            else if (e.which == 40 && this.dy ==0){
                this.dx = 0;
                this.dy = +this.grid;
            }
        })
    }
    eat(x,y){
        if (this.x == x && this.y == y){
            this.maxCells++;
            this.score++;
            console.log(this.score)
            return true;
        }
        return false;
    }
    endGame(){
        for (let i = 1; i< this.cell.length; i++){
            if (this.x == this.cell[i].x && this.y ==this.cell[i].y || this.x >= this.game.canvas.width
                || this.y >= this.game.canvas.height || this.x<0 || this.y <0){
                 return false;
            }
        }
        return true;
    }

}