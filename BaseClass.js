class BaseClass{
    constructor(x, y, width, height, radius, options) {
        // var options = {
        //     'restitution':0.8,
        //     'friction':1.0,
        //     'density':1.0,
        //     'isStatic' : true
        // }
        this.body = Bodies.circle(x,y,radius, options);
        this.width = width;
        this.height = height;
        World.add(engine.world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}