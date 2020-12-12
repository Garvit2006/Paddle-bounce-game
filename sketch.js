var ball,img,paddle;
function preload() {
  /* preload your images here of the ball and the paddle */
  ballImage= loadImage("ball.png");
  paddleImage=loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  /* assign the images to the sprites */
  ball=createSprite(50,200,10,10); 
  ball.addImage(ballImage);
  paddle=createSprite(370,200,5,5);
  paddle.addImage(paddleImage);
  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityX=9;

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
   edges=createEdgeSprites();
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
ball.bounceOff(paddle,randomVelocity);
  
  

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  paddle.collide(edges[0]);
  paddle.collide(edges[2]);
  paddle.collide(edges[3]);
  
  
  if(keyDown(UP_ARROW)){
    paddle.y=paddle.y-20;
    
     /* what should happen when you press the UP Arrow Key */
  }
  
  if(keyDown(DOWN_ARROW))
  {
   paddle.y=paddle.y+20;
    
    /* what should happen when you press the UP Arrow Key */
  }
  drawSprites();
  //randomVelocity();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
 ball.velocityY=random(-8,8);
  
}

