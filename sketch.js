//variables
var player
var backgroundImg
var ball
var opponent
var tennisImg
var ballImg
var gameState
var ps = 4
var os = 0


function setup() {
  createCanvas(400,600);

  //sprite creation
  ball = createSprite(200,300,10,10)
  player = createSprite(200,550,25,25)
  opponent = createSprite(200,50,25,25)

  //smaller images
  player.scale = .1
  opponent.scale = .1
  ball.scale = .05

  gameState = 0
}

function preload(){

  //load Images
backgroundImg = loadImage("tenniscourt.png")
tennisImg = loadImage("player.png")
ballImg = loadImage("ball.png")



}



function draw() {
  
  
  //add images
  background(backgroundImg);
  player.addImage(tennisImg)
  ball.addImage(ballImg)
  opponent.addImage(tennisImg)

  
if(gameState === 0){

  stroke("red")
  text("PRESS SPACE TO BEGIN",150,180)
  
  //SERVE
  if(keyDown("space")){

    ball.velocityY = -5
    gameState = 1
  }

  
}


 // ball.bounceOff(//opponent)
  ball.bounceOff(player)

  //player movement
  if(mouseY >= 300){
  player.x = mouseX
  player.y = mouseY
  }

  //score
  stroke("green")
  text (ps +" - "+ os,336, 27)

  if((ball.x > 338 && ball.y<276) || (ball.x <60 && ball.y<276)){

    ps = ps+1

  }

  if((ball.x > 338 && ball.y>276) || (ball.x <60 && ball.y>276)){

    os = os+1

  }



  

  //power of the shots
  if(ball.isTouching(opponent)){

    ball.velocityX = random(-2,2)
    ball.velocityY = random(1,5)

  }

  if(ball.isTouching(player)){

    ball.velocityX = random(-2,2)
    ball.velocityY = random(-1,-5)

  }

  if(ps%5 === 0 && ball.isTouching(opponent)){

    ball.velocityX = ball.velocityX +5
    ball.velocityY = ball.velocityY +5

  }


//text(mouseX+" ,"+mouseY,200,50)

  opponent.x = ball.x
  
  if(ball.x > 338 || ball.x < 60){

ball.x = 200
ball.y = 300
ball.velocityX = 0
ball.velocityY = 0

gameState = 0

}


  
  drawSprites();
}