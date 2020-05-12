
var raindrops = [];

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);

  raindrops1 = new Raindrops();
  //raindrops2 = new Raindrops();
 for(var i = 0 ; i<1000;i++){
   raindrops.push(new Raindrops())

 }
}

function draw() {
  background("grey"); 
  raindrops1.draw();
  //raindrops2.draw();
  for(var i = 0; i<1000;i++){
    raindrops[i].draw();
    raindrops[i].velocityY++
  }
}