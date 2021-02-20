class Umbrella
{
    constructor(x,y)
    {
       var options={
        isStatic:true
       } 

       this.body=Bodies.circle(x,y,50,options);
       this.r=50;

      this.image=loadImage("images/WalkingFrame/walking_1.png");
       World.add(world,this.body);
    }

    display()
    {
      var pos=this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+70,300,300);
      //fill("white");
      //rect(this.x,this.y,this.width,this.height)
    }
}