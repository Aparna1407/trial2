class CannonBall{
    constructor(x,y,r){
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("assets/cannonball.png")
        var options={
            isStatic:true
        }
        this.body=Bodies.circle(this.x,this.y,this.r,options)
    }
    display(){
        var pos=this.body.position;
        image(this.image,pos.x,pos.y,this.r,this.r)
    }

    shoot(){
        console.log("shoot")
        Matter.Body.setStatic(this.body,false)
        Matter.Body.setVelocity(this.body,{x:20 ,y:-30 })
    }
}