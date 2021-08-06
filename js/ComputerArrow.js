class ComputerArrow {
  constructor(x,y, width, height) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
      isStatic: true
      
    };
    this.x = computer.body.position.x - 100;
    this.y = computer.body.position.y + 60;
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
    this.image = loadImage("./assets/arrow.png");
    World.add(world, this.body);
  }

 display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    Matter.Body.setAngle(this.body, 2.3)
 
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
