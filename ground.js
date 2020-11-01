class Ground  {
    constructor(x, y, w, h) {
      const options = {
        isStatic:true
      };
      this.body = Matter.Bodies.rectangle(x, y, w, h, options);
      World.add(myWorld, this.body);
      this.w = w;
      this.h = h;
    }
  
    show() {
      const pos = this.body.position;
     
      push();
      translate(pos.x, pos.y);
      
      noStroke();
      fill("brown");
      rectMode(CENTER);
      rect(0, 0, this.w, this.h);
      pop();
    }
  }