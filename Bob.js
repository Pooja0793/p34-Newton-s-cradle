class Bob{
    constructor(x,y,color){
        var options={
            isStatic:false,
            density:0.8,
            friction:0.3,
            restitution:1,
            frictionAir :0.0,
        }
        this.body=Bodies.circle(x,y,25,options);
        this.color = color;
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle)
        ellipseMode(RADIUS);
        fill(this.color);
        ellipse(0,0,25,25);
        pop();
    }
}