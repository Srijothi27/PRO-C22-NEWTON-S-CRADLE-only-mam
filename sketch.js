const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bobs;
var bobs2;
var bobs3;
var bobs4;
var bobs5;
var ropes;
var ropes2;
var ropes3;
var ropes4;
var ropes5;




function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	var bobs_options={
		isStatic:true
	}

	var ropes_option={
		isStatic:true
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

    bobs = Bodies.circle(495,450,45,bobs_options);
	World.add(world,bobs);
	bobs2 = Bodies.circle(450,450,45,bobs_options);
	World.add(world,bobs2);
	bobs3 = Bodies.circle(405,450,45,bobs_options);
	World.add(world,bobs3);
	bobs4 = Bodies.circle(360,450,45,bobs_options);
	World.add(world,bobs4);
	bobs5 = Bodies.circle(315,450,45,bobs_options);
	World.add(world,bobs5);

	
	    World.add(world,con);


	


  

	
	
	

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here


  
  //create ellipse shape for multiple bobs here
  ellipse(bobs.position.x,bobs.position.y,45);
  ellipse(bobs2.position.x,bobs2.position.y,45);
  ellipse(bobs3.position.x,bobs3.position.y,45);
  ellipse(bobs4.position.x,bobs4.position.y,45);
  ellipse(bobs5.position.x,bobs5.position.y,45);
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
