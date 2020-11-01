const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon

function preload(){

  polygonImage = loadImage("polygon.jpeg")

}

function setup() {
  var canvas = createCanvas(1300,400);
  engine = Engine.create();
 world = engine.world;
 polygon = Bodies.circle(50,200,20);
 World.add(world,polygon);

 slingshot = new SlingShot(this.polygon,{x:100,y:200});

 //Blocks 20 spaces awaay from start

 platform1 = new Platform(605,370,250,10)
 block1 = new Blocks(500,330,30,40)
 block2 = new Blocks(530,330,30,40)
 block3 = new Blocks(560,330,30,40)
 block4 = new Blocks(590,320,30,40)
 block5 = new Blocks(620,320,30,40)
 block6 = new Blocks(650,320,30,40)
 block7 = new Blocks(680,310,30,40)
 block8 = new Blocks(710,310,30,40)

 block9 = new Blocks(530,260,30,40)
 block10 = new Blocks(560,260,30,40)
 block11 = new Blocks(590,260,30,40)
 block12 = new Blocks(620,260,30,40)
 block13 = new Blocks(650,260,30,40)
 block14 = new Blocks(680,260,30,40)

 block15 = new Blocks(560,210,30,40)
 block16 = new Blocks(590,210,30,40)
 block17 = new Blocks(620,210,30,40)
 block18 = new Blocks(650,210,30,40)
 
 block19 = new Blocks(590,150,30,40)
 block20 = new Blocks(620,150,30,40)
 
 block21 = new Blocks(605,100,30,40)

  //Second platform

 platform2 = new Platform(950,250,160,10)
 block22 = new Blocks(890,210,30,40);
 block23 = new Blocks(920,210,30,40);
 block24 = new Blocks(950,210,30,40);
 block25 = new Blocks(980,210,30,40);
 block26 = new Blocks(1010,210,30,40);

 block27 = new Blocks(920,160,30,40);
 block28 = new Blocks(950,160,30,40);
 block29 = new Blocks(980,160,30,40);

 block30 = new Blocks(950,110,30,40);


}

function draw() {
  background("brown");  
  Engine.update(engine);

 imageMode(CENTER)
 image(polygonImage,polygon.position.x,polygon.position.y,40,40);
 
  


  platform1.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();

  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();

  block15.display();
  block16.display();
  block17.display();
  block18.display();

  block19.display();
  block20.display();

  block21.display();

  

 

 platform2.display();

 block22.display();
 block23.display();
 block24.display();
 block25.display();
 block26.display();
 
 block27.display();
 block28.display();
 block29.display();

 block30.display();
 
  
 slingshot.display();
 
  

  drawSprites();
}

function mouseDragged(){

  Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY})

}
function mouseReleased(){

  slingshot.fly();

}
