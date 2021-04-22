const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object, box1, box2,ground;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

   // bird= new Bird(100,100);
    box1= new Box(700,320,70,70);
    box2= new Box(920,320,70,70);
    pig1=new Pig(810,350);

    box3= new Box(700,240,70,70);
    box4= new Box(920,240,70,70);


    log1=new log(810,260,300,PI/2)
    log2=new log(810,180,300,PI/2)
    log3=new log(760,120,150,PI/7)
    log4=new log(870,120,150,-PI/7)
    
    
    box5= new Box(700,320,70,70);
   
    ground= new Ground(600,390,1200,20);



   
}

function draw(){
    background(0);
    Engine.update(engine);

    
  // bird.display();
   box1.display();
   box2.display();
   pig1.display();
   ground.display();
   log1.display();
   log2.display();
   log3.display();
   log4.display();
   pig1.display();
   pig2.display();
   
   box1.display()
   box2.display()
   box3.display()
   box4.display()
   box5.display()
}