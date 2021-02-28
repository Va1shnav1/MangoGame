class Chain{
    constructor(bodya, pointb){
        var options = {
            bodyA: bodya,
            pointB: pointb,
            length:20,
            stiffness:0.003
        }
        this.pointB=pointb;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    display(){
        if(this.chain.bodyA){
            var pointA, pointB;
            pointA=this.chain.bodyA.position;
            pointB=this.pointB;
            stroke("black");
            strokeWeight(5);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        } 
    }
    fly(){
        this.chain.bodyA=null;
    }
    attach(body){
        this.chain.bodyA=body;
    }
}