class Pig
{

    constructor(x,y)
    {

        var options= { restitution : 1.0,density :4, friction : 0.3}
        this.body=Bodies.rectangle(x,y,50,50,options);
        World.add(world,this.body);
        this.w= 50;
        this.h=50;

    }

    display()
    {
        var pos = this.body.position;
        var angle=this.body.angle;


        push();
        translate(pos.x,pos.y);
        angleMode(RADIANS)
        rotate(angle);
        rectMode(CENTER);
        fill("green")
        stroke ("green")
        strokeWeight (15)
        rect(0,0,this.w,this.h);
        pop();


    }
}
