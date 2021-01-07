
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roofOb;
var r1,r2,r3,r4,r5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roofOb = new Roof(400,200,250,20);
	bob1 = new Bob(300,400,"blue");
	bob2 = new Bob(350,400,"yellow");
	bob3 = new Bob(400,400,"red");
	bob4 = new Bob(450,400,"yellow");
	bob5 = new Bob(500,400,"blue");

	r1 = new Rope(bob1.body,{x:300,y:200});
	r2 = new Rope(bob2.body,{x:350,y:200});
	r3 = new Rope(bob3.body,{x:400,y:200});
	r4 = new Rope(bob4.body,{x:450,y:200});
	r5 = new Rope(bob5.body,{x:500,y:200});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //roofOb.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();
 
}

/*function keyPressed(){
	if(keyCode===UP_ARROW){

		Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-50});
}
}*/

function mouseDragged(){
	Body.setPosition(bob1.body,{x:mouseX,y:mouseY})
}

