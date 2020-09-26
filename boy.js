class Boy extends BaseClass{
    constructor(x, y, width, height, radius){
      var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic' : true
        }
        super(x,y,180,300,25, options);
        //this.body = Bodies.rectangle(x,y,width,height,options);
        
      this.image = loadImage("boy.png")
    }

    display() {  
      super.display();
  
  }}