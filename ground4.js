class Ground4{
    constructor(x,y,width,height){
  
    this.x = x;
    this.y = y;
  
    this.width = width;
    this.height = height;
    this.image = loadImage("Screenshot (99).png");
  
    this.body = Bodies.rectangle(this.x,this.y,this.width,this.heights);
  
    World.add(world,this.body);
  
    }
  
    display(){
        
     imageMode(CENTER);
     image(this.image,160,850,350,400);
  
    }
  
  }
  
  
  