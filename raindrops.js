class Raindrops{
    constructor(x,y){
   
    this.width = random(1,2);
    this.height = random(0,10);
    this.x = random(0,window.innerWidth);
    this.y = random(-10,600);
    this.velocityY  = random(2,5);
    //this.char = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
    //'1','2','3','4','5','6','7','8','9','!','@','#','$','%','^','&','*'];
   // this.imageWidth = 200;
   // this.imageHeight = 100;
   // this.image = loadImage("sprites/untitled.png")
  
  }

  draw(){
    stroke("blue");
    fill("blue");
    //fill("grey");
    var size = random(10,35);
 // line(300,2000,300,5)
 // rect(260,90,20,700)
  //var len = this.char.length;
  //var i = random(0,len-1);
  //text(this.char[i],this.x,this.y);
  //this.char[i].velocityY = this.velocityY;
  
 rect(this.x,this.y,this.width,this.height+size)
  //imageMode(CENTER);
  //image(this.image,600,100, this.imageWidth, this.imageHeight);
  
  

  }
    
  
}
