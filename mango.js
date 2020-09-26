class Mango extends BaseClass {
    constructor(x, y, width, height, radius){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic' : true
        }
        //this.body = Bodies.rectangle(x,y,width,height,options);
        super(x,y,30,50,25, options);
      this.image = loadImage("mango.png")
    }

    display() {  
      super.display();
    }

    
  
  }