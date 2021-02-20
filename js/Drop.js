class Drop
{
    constructor(x,y)
    {
        var options={
            'friction':0.001,
            'restitution':0.1,
            //'density':0.1
        }
        this.body=Bodies.circle(x,y,10,options);
       // this.x=x;
        //this.y=y;
        this.r=5;

        World.add(world,this.body);
    }

    update()
    {
        if(this.body.position.y>height)
        {
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});
        }
    }
    showDrops()
    {
        var pos=this.body.position;
        //push();
        fill("blue");
        //pop();
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.r,this.r);
    }
}