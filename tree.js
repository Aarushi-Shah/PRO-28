class Tree extends BaseClass {
    constructor(x, y, width, height, radius){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic' : true
        }
       //this.body = Bodies.rectangle(x,y,width,height,options);
         super(x,y,500,500,50, options );
      this.image = loadImage("tree.png");
    }
  
    display() {  
      super.display();
    }
  }