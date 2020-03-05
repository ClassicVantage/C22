const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var engine;
var world;
var ground;
var ball
function setup() {

  var canvas = createCanvas(400,400)
engine=Engine.create();
world=engine.world;
var ground_options={       
  isStatic:true
}
var ball_options={
  restitution:1.0
}

ground=Bodies.rectangle(200,390,400,20,ground_options);
World.add(world,ground);
ball=Bodies.circle(200,100,20,ball_options);
World.add(world,ball);
}

function draw() {
  background(0,0,0);
  Engine.update(engine)
  rectMode(CENTER);
  ellipseMode(CENTER);
  ellipse(ball.position.y, ball.position.y,20,20);
 rect(ground.position.x,ground.position.y, 400, 20);
}