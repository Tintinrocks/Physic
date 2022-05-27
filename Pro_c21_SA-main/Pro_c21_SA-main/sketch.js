const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;

var button_UP
var button_RIGHT

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  button_UP=createImg('up.png');
  button_UP.position(20,30);
  button_UP.size(50,50);
  button_UP.mouseClicked(vforce);
  button_RIGHT=createImg('right.png');
  button_RIGHT.position(80,30);
  button_RIGHT.size(50,50);
  button_RIGHT.mouseClicked(hforce);
  var ballOptions = {
    restitution:0.9
  }
  ball = Bodies.circle(200,100,20,ballOptions);
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  World.add(world, ball);
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ellipse(ball.position.x,ball.position.y,20);
  Engine.update(engine);
}
function hforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}
function vforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}