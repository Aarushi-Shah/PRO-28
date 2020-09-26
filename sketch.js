
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var stone, tree,boy;

function setup() {
	createCanvas(800, 700);
	 engine = Engine.create();
	 stone = new Stone(70,495);
	 tree = new Tree(580,420);
	 boy = new Boy(130,576);
	 m1 = new Mango(770,396);
	 m2 = new Mango(640,396);
	 m3 = new Mango(590,320);
	 m4 = new Mango(555,425);
	 m5 = new Mango(690,370);
	 m6 = new Mango(655,270);
	 m7= new Mango(450,300);
	 m8 = new Mango(670,230);
	 m9 = new Mango(420,370);
	 m10 = new Mango(470,370);
	sling = new SlingShot(stone.body,{x:200, y:50});
	// World.add(engine.world,stone);
	 ground = Bodies.rectangle(400, 675, 800, 50 , {isStatic:true} );
	// World.add(engine.world, ground);
}
function draw() {
   	// Engine.update(engine);
	 background(211,211,211);
   	 rectMode(CENTER);
	 rect(ground.position.x,ground.position.y,800,50);
	 tree.display();
	 boy.display();
	 stone.display();
	 m1.display();
	 m2.display();
	 m3.display();
	 m4.display();
	 m5.display();
	 m6.display();
	 m7.display();
	 m8.display();
	 m9.display();
     m10.display();
	sling.display();
	detectCollision(m1, stone);
	detectCollision(m2, stone);
	detectCollision(m3, stone);
	detectCollision(m4, stone);
	detectCollision(m5, stone);
	detectCollision(m6, stone);
	detectCollision(m7, stone);
	detectCollision(m8, stone);
	detectCollision(m9, stone);
	detectCollision(m10, stone);

}
// function keyPressed(){
// 	if (keyCode === UP_ARROW){
// 		Body.setStatic(stone.body,false);
// 		Body.applyForce(stone.body,stone.body.position,{x:73,y:-85});
// 	}
// }
function detectCollision(lmango, lstone){
	var mangoBodyPosition = lmango.body.position;
	var stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance <= lmango.body.circleRadius + lstone.body.circleRadius){
		Matter.Body.setStatic(lmango.body, false);
		Matter.Body.setPosition(lmango.body,{x:lmango.body.position.x, y:625});
		Matter.Body.setAngle(lmango.body,20);
		//lmango.body.isStatic = false;
	}
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}

// function detectCollision(){
// 	mangoBP= mango.body.position;
// }

