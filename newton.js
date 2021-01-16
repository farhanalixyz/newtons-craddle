class Newton{
 constructor(x,y,width,height){
     this.body=Bodies.rectangle(position.x,this.body.position.y,width,height,{isStatic:true});
     this.width=width;
     this.height=height;
    World.add(world,this.body);
 }
   display(){
       push();
       rectMode(CENTER);
       fill(244,20,50);
       rect(this.body.position.x,this,body.position.y,this.width,this.height);
       pop();
   }
}