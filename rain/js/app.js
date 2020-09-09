let rain1;
let rain2;
let rain3;
let ground;
function setup(){
  createCanvas(1000,1000);
  rain1 = new RainDrop(200,0,50);
  rain2 = new RainDrop(500,0,50);
  rain3 = new RainDrop(800,0,50);
  ground = new Ground(1,900,1000,100,0);
}

    /*  this.changeColor = function( ){
        this.color = color(0,0,0+5)
      }
      */



function draw() {
  background(60);
  rain1.show();
  rain2.show();
  rain3.show();
  rain1.move();
  rain2.move();
  rain3.move();
  ground.show();
 var d= dist(rain1.x,rain1.y,ground.x,ground.y)
 if (d<rain1.size + ground.height) {
   ground.changeColor();
 }
}
class Ground{
  constructor(x,y,width,height,fill) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = fill;
   }
show(){
stroke(200);
fill(this.color),
rect(this.x,this.y,this.width,this.height)
}
changeColor(){
  this.color = fill(0,0,0);
}
}
class RainDrop {
  constructor(x,y,size) {
  this.x = x;
  this.y = y;
  this.size = size;
}

    move(){
      this.x= this.x + random(-10,10)
      this.y= this.y + 10;
      if (this.y == 920) {
        this.y = 0;
      }
    }
    show() {
    stroke(200);
    strokeWeight(4);
    fill(0,0,255);
    circle(this.x,this.y,this.size);
    }

}
