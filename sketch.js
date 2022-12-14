const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ball;
function setup() {
    createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var options = {
        restitution:0.7,
        airFriction: 0, 
    }

    ball = Bodies.circle(200,50,30,options);
    World.add(world,ball);
    console.log(ball)
}

function draw() 
{
    background(80)
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,30,30);
}

