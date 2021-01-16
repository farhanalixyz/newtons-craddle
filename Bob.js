class Craddle {
    constructor(x,y,radius){
        var options ={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
        console.log(this.body);
    }
    display(){
        push();
        ellipseMode(RADIUS); 
        fill("purple");
        ellipse(this.body.position.x,this.body.position.y,30,30);
        pop();
    }
};
