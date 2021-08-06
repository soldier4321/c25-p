class ComputerArcher {
    constructor(x, y, width, height) {
            this.x = computer.body.position.x;
            this.y = computer.body.position.y;
            this.width = width;
            this.height = height;
            
       
        this.image = loadImage("./assets/computerArcher.png");
        
      }
        display() {

            if(keyIsDown(UP_ARROW) && this.angle < 2.50){
                this.angle += 0.02
            }
              if(keyIsDown(DOWN_ARROW) && this.angle > -0.1){
                this.angle -= 0.02
            }
            push();
            translate(this.x, this.y);
            rotate(this.angle);
            image(this.image, -70, 0, this.width, this.height);
            pop();
    }
}