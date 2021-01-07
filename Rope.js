class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1,
            angularStiffness : 1,
            length:220

        }

        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }

    display(){
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.pointB;

        stroke("red");
        strokeWeight(2);

        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}