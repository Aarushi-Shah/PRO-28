class Stone extends BaseClass{
  constructor(x, y, width, height, radius){
    var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0,
          'isStatic' : true
      }
      super(x,y,50,50,20, options);
      //this.body = Bodies.rectangle(x,y,width,height,options);
      
    this.image = loadImage("stone.png")
  }

  display() {  
    super.display();

}}