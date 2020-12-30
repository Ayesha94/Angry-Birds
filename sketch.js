//world, engine, bodies
//nickname
//const means constant
//namespacing:nickname
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var abEngine, abWorld, boxA, ground;
//1: create the engine
//2: update the engine
//3: access the engine's world
//4: creating the bodies in the physics world
//5: adding all the bodies in the world

function setup() {
  createCanvas(800,400);
 
 //creating the engine
 abEngine=Engine.create();
 
 abWorld=abEngine.world;

 var box_options={
restitution:1
 }

 boxA= Bodies.rectangle(50, 200, 50, 50, box_options);

  World.add(abWorld, boxA);
 console.log(boxA);
 var ground_options={
  isStatic:true
   }
  
   ground= Bodies.rectangle(width/2, height-20, width, 10, ground_options);
   World.add(abWorld, ground)

   ball=Bodies.circle(200, 100, 30, box_options)
   World.add(abWorld, ball);
}


function draw() {

  background(0);  
  Engine.update(abEngine);

  fill("yellow")
  rectMode(CENTER)
  rect(boxA.position.x, boxA.position.y, 50, 50);
  fill("red")
  rectMode(CENTER)
  rect(ground.position.x, ground.position.y, width, 10)

  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 30, 30)
}