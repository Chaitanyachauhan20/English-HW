
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world, abt;


function preload(){
 
	back = loadImage("Screenshot (101).png");
	back2 = loadImage("Screenshot (102).png");

}

function setup() {
	createCanvas(1600, 1500);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new Ground();
	abt = new Ground2();
	gl = new Ground3();
	pl = new Ground4();
	po = new Ground6();

	//dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(back);

  textSize(30);
  
	//back2.display(700,800);
 
  abt.display();
  gl.display();
  pl.display();
  po.display();
  groundObject.display();
 // dustbinObj.display();

}

