const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher, playerArrow;
var computer, computerBase, computerArcher, computerArrow;

var arrow, angle1, angle2, angle;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angle1 = -PI / 4;
  angle2 = -PI / -4;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
 
  //Create Player Archer Object
  playerArcher = new PlayerArcher(285, 100, 80, 120);

    

  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150,
    angle
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  computerArcher = new ComputerArcher(285, 100, 80, 120);
  
  //Create an arrow Object
  computerArrow = new ComputerArrow(285, 100, 50, 20, angle2)
  playerArrow = new PlayerArrow(285, 100, 50, 20)


  
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  playerArcher.display();
  computerArcher.display()
  computerArrow.display();
  playerArrow.display();


  //Display arrow();
  
  //if Space (32) key is pressed call shoot function of playerArrow
  if(keyCode === 32){
    playerArrow.shoot(playerArcher.body.angle)
  }
    //Call shoot() function and pass angle of playerArcher


  }




