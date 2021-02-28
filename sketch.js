
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8;
var world,boy;
var stoneObj;
var chain;
var score=0;
var START=0;
var LAUNCHED=1;
var gameState=START;
function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1500, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1000,130,30);
	mango3=new mango(900,250,30);
	mango4=new mango(1100,200,30);
	mango5=new mango(1190,150,30);
	mango6=new mango(1250,250,30);
	mango7=new mango(1000,250,30);
	mango8=new mango(1050,60,30);
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	stoneObj = new stone(230, 400, 15,{isStatic:false});

	chain = new Chain(stoneObj.body, {x:240, y:425});
	Engine.run(engine);

}

function draw() {

  background("lightblue");
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  stoneObj.display();
  chain.display();
  groundObject.display();
 

  detectCollision(stoneObj, mango1);
  detectCollision(stoneObj, mango2);
  detectCollision(stoneObj, mango3);
  detectCollision(stoneObj, mango4);
  detectCollision(stoneObj, mango5);
  detectCollision(stoneObj, mango6);
  detectCollision(stoneObj, mango7);
  detectCollision(stoneObj, mango8);

  textSize(30);
  fill("brown");
  text("score"+score, 500, 100);
}
function mouseDragged(){
	if(gameState===START){
   		Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY});
	}
}

function mouseReleased(){
    chain.fly();
	gameState=LAUNCHED;
}
function detectCollision(lstone, lmango){
	mangoBodyPos = lmango.body.position
	stoneBodyPos = lstone.body.position

	var distance = dist(stoneBodyPos.x, stoneBodyPos.y, mangoBodyPos.x, mangoBodyPos.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body, false)
		score=score+1;
	}
}
function keyPressed(){
	if (keyCode === 32){
		Matter.Body.setPosition(stoneObj.body, {x:240, y:425})
		chain.attach(stoneObj.body);
		gameState=START;
	}
}