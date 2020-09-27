
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	ground=createSprite(400, 680, 1200, 20);
	ground.shapeColor=color("white");

	
	ground1 = Bodies.rectangle(400, 680, 1200, 15, {isStatic:true} );
	 World.add(world, ground1);
	 


	paper1 = new Paper(100,400,20);

	rect1 = new Dustbin(587, height-30, 189, 5);
	rect2 = new Dustbin(495, height-70, 5, 80);
	rect3 = new Dustbin(680, height-70, 5, 80);


	
	Engine.run(engine);
  
  
}


function draw() {
	rectMode(CENTER);
	background(0);
	Engine.update(engine);
	paper1.display();
	rect1.display();
	rect2.display();
	rect3.display();
   BouncePaper1(rect3, paper1);
	
	drawSprites();
  }
  
  function keyPressed(){
	  if(keyCode === UP_ARROW){
		  Matter.Body.applyForce(paper1.body, paper1.body.position, {x:55,y:-55});
	  }
  }
  
  function BouncePaper1(object1,object2)
  {
	  if((object1.y - object2.y) < (object1.height/2 + object2.height/2))
	  {
		  object2.velocityY = object2.velocityY * (-1);
	  }
  
  }


