const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;
const MouseConstraint=Matter.MouseConstraint;

var engine,world;
var drops,umbrella;
let umbrella_anim;
let maxDrops=100;
var thunderbolt;
var drops=[];
var num;
var thunderframe;

var thunderbolt_img1,thunderbolt_img2,thunderbolt_img3,thunderbolt_img4;

function preload(){

    umbrella_anim=loadAnimation("images/WalkingFrame/walking_1.png","images/WalkingFrame/walking_2.png","images/WalkingFrame/walking_3.png"
    ,"images/WalkingFrame/walking_4.png","images/WalkingFrame/walking_5.png","images/WalkingFrame/walking_6.png","images/WalkingFrame/walking_7.png"
    ,"images/WalkingFrame/walking_8.png")

    thunderbolt_img1=loadImage("images/thunderbolt/1.png");
    thunderbolt_img2=loadImage("images/thunderbolt/2.png");
    thunderbolt_img3=loadImage("images/thunderbolt/3.png");
    thunderbolt_img4=loadImage("images/thunderbolt/4.png");
    
}

function setup(){
   //To create canvas
   createCanvas(450,700);

   engine=Engine.create();  
   world=engine.world;

  
  
   //thunderbolt.addImage(thunderbolt_img1);
    
   umbrella=new Umbrella(200,500);

   
   if(frameCount%150===0)
   {
    for(i=0;i<maxDrops;i++)
   {
       drops.push(new Drop(random(0,400),random(0,400)));
   }
 }
   
}

function draw(){
    //console.log(num);
    Engine.update(engine);

    //To assign the background
    background("black");

    console.log(thunderbolt);
    console.log(frameCount);
    if(frameCount%80===0)
    {
    thunderframe=frameCount;  
    thunderbolt=createSprite(random(10,370),random(10,30),10,10);
    num=Math.round(random(1,4)); 
    switch(num)
    {
        case 1: thunderbolt.addImage(thunderbolt_img1);
            break;
        case 2: thunderbolt.addImage(thunderbolt_img2);
            break;
        case 3: thunderbolt.addImage(thunderbolt_img3);
            break;
        case 4: thunderbolt.addImage(thunderbolt_img4);
            break;
        default: break;
    }
    //randomizing thunderbolt
    thunderbolt.scale=random(0.3,0.6);
}

//destorying thunderbolt after 10 frames from its creation frame count
if(thunderframe+10===frameCount && thunderbolt)
{
    thunderbolt.destroy();
}


 for(var i=0;i<maxDrops;i++)
 {
     drops[i].showDrops();
     drops[i].update();
 }   
  
 //  drops.update();

    umbrella.display();
    
 drawSprites();   
}   

