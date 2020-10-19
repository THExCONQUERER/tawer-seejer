function setup() {
  createCanvas(800,400);

  background("blue");

  

  
}

function draw() {
 
  background("blue");

var bullet = createSprite(70, 200, 36, 36);
  bullet.shapeColor = color("purple");

if (keyDown("space")) {
    bullet.velocityX =  10; 
  } 

  
    
  

  
 

 var line1 = createSprite(300, 250, 160, 10);
  line1.shapeColor = color("yellowgreen");

  var rect1 = createSprite(230, 229, 20, 32);
  rect1.shapeColor = color("red");

  var rect2 = createSprite(250, 229, 20, 32);
  rect2.shapeColor = color("black");

  var rect3 = createSprite(270, 229, 20, 32);
  rect3.shapeColor = color("red");

  var rect4 = createSprite(290, 229, 20, 32);
  rect4.shapeColor = color("black");

  var rect5 = createSprite(310, 229, 20, 32);
  rect5.shapeColor = color("red");

  var rect6 = createSprite(330, 229, 20, 32);
  rect6.shapeColor = color("black");

  var rect7 = createSprite(350, 229, 20, 32);
  rect7.shapeColor = color("red");
                                             
  var rect8 = createSprite(370, 229, 20, 32);
  rect8.shapeColor = color("black");
                                                  
  var rect9 = createSprite(240, 197, 20, 32);
  rect9.shapeColor = color("brown");
                                                
  var rect10 = createSprite(260, 197, 20, 32);
  rect10.shapeColor = color("yellow");

  var rect11 = createSprite(280, 197, 20, 32);
  rect11.shapeColor = color("brown");

  var rect12 = createSprite(300, 197, 20, 32);
  rect12.shapeColor = color("yellow");

  var rect13 = createSprite(320, 197, 20, 32);
  rect13.shapeColor = color("brown");

  var rect14 = createSprite(340, 197, 20, 32);
  rect14.shapeColor = color("yellow");
  
  var rect15 = createSprite(360, 197, 20, 32);
  rect15.shapeColor = color("brown"); 

  var rect16 = createSprite(250, 165, 20, 32);
  rect16.shapeColor = color("red");
  
  var rect17 = createSprite(270, 165, 20, 32);
  rect17.shapeColor = color("black"); 

  var rect18 = createSprite(290, 165, 20, 32);
  rect18.shapeColor = color("red");

  var rect19 = createSprite(310, 165, 20, 32);
  rect19.shapeColor = color("black");
  
  var rect20 = createSprite(330, 165, 20, 32);
  rect20.shapeColor = color("red");

  var rect21 = createSprite(350, 165, 20, 32);
  rect21.shapeColor = color("black");

  
  drawSprites();
}