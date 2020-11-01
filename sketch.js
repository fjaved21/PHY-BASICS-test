const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine,myWorld;

var box, ball;
var ground;

function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;


  var box_options= {
    density: 1.0,
  }
box= Bodies.rectangle(400,200,30,30,box_options);
World.add(myWorld,box);

var ball_options={
restitution: 1.0

}
ball= Bodies.circle(200,100,40,ball_options);
World.add(myWorld,ball);

console.log(box);

ground= new Ground(600,380,1200,20);
rock1= new Rock(700,100,50,50);
  rock2= new Rock(750,100,50,50);
 rock3= new Rock(800,100,50,50);
  rock4= new Rock(725,50,50,50);
  rock5= new Rock(775,50,50,50);
  rock6= new Rock(750,20,50,50);

}

  function draw() {
    background(0);  
    Engine.update(myEngine);
rectMode(CENTER);
rect(box.position.x,box.position.y,30,30);
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,40,40);

ground.show();
rock1.show();
rock2.show();
rock3.show();
rock4.show();
rock5.show();
rock6.show();
  }
