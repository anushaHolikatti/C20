var fixedRect , movingRect;

function setup() {
  createCanvas(800,400);
  
  fixedRect = createSprite (200,200,80,50);
  fixedRect.shapeColor = color(0,255,0);
  fixedRect.debug = true;
  fixedRect.velocityX = 2 ;

  movingRect = createSprite (600,200,30,80);
  movingRect.shapeColor = color(0,255,0);
  movingRect.debug = true;

}

function draw() {
  background(0,0,0); 
  
  movingRect.x =  World.mouseX;
  movingRect.y = World.mouseY;

  if (movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
  && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
  && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
  && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2 ) {
    movingRect.shapeColor = color (255,0,0);
    fixedRect.shapeColor = color (255,0,0);
  }
  else{
    fixedRect.shapeColor = color(0,255,0);
    movingRect.shapeColor = color(0,255,0);
  }

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2){
      movingRect.velocityX  = movingRect.velocityX*(-1);
      fixedRect.velocityX  = fixedRect.velocityX*(-1);
  }
  
  if(movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
      movingRect.velocityY  = movingRect.velocityY*(-1);
      fixedRect.velocityY  = fixedRect.velocityY*(-1);
  }
  
  drawSprites();
}