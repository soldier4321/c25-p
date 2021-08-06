class PlayerArcher {
    constructor(x, y, width, height) {
            this.x = player.body.position.x;
            this.y = player.body.position.y;
            this.width = width;
            this.height = height;
            var options = {
              isStatic: true
            }
       
        this.image = loadImage("./assets/playerArcher.png");
        this.body = Matter.Bodies.rectangle(x, y, width, height, options)
      
        World.add(world, this.body)
    }
        display() {
            var pos =this.body.position;
            var angle = this.body.angle;
            if(keyIsDown(UP_ARROW) && angle > -2.50){
                angle -= 0.02
                Matter.Body.setAngle(this.body, angle)
            }
              if(keyIsDown(DOWN_ARROW) && angle < 0.35){
                angle += 0.02
                Matter.Body.setAngle(this.body, angle);
            }
            push();
            translate(this.x, this.y);
            rotate(angle);
            image(this.image, 0, 0, this.width, this.height);
            pop();
    }
}