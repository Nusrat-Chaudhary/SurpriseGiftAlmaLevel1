

var background1, background1Img
var fox, foxImg
var caveman1, caveman1Img
var caveman2, caveman2Img
var orange, orangeImg
var banana, bananaImg
var cave, caveImg
var background2, background2Img
var warrior1, warrior1Img
var warrior2, warrior2Img
var dagger, daggerImg
var enemy, enemyImg
var background3, background3Img
var level1Score = 0
var level1Death = 0


var END = 0
var PLAY = 1
var WIN = 2

var mode = "LEVEL1";
var gameState = PLAY;

level1Score = 0;
level1Death = 0;


function preload() {
  //LEVEL1
  background1Img = loadImage("LEVEL1Img/background1.png")
  foxImg = loadAnimation("LEVEL1Img/fox7.png", "LEVEL1Img/fox1.png", "LEVEL1Img/fox6.png",
    "LEVEL1Img/fox4.png", "LEVEL1Img/fox5.png", "LEVEL1Img/fox3.png", "LEVEL1Img/fox2.png")
  caveMan1Img = loadAnimation("LEVEL1Img/boy1.png", "LEVEL1Img/boy2.png", "LEVEL1Img/boy3.png")
  caveMan2Img = loadImage("LEVEL1Img/boy6.png")
  caveMan3Img = loadImage("LEVEL1Img/boy1.png")
  orangeImg = loadImage("LEVEL1Img/orange.png")
  bananaImg = loadImage("LEVEL1Img/banana.png")
  caveImg = loadImage("LEVEL1Img/cave 1.png")

}



function setup() {
  createCanvas(1300, 400)
  background1 = createSprite(860, 200, 20, 20)
  background1.addImage(background1Img)

  caveMan1 = createSprite(200, 200, 20, 20)
  caveMan1.addAnimation("run", caveMan1Img)
  caveMan1.addAnimation("jump", caveMan2Img)
  caveMan1.addAnimation("enterCave", caveMan3Img)
  caveMan1.scale = 0.5

  invisibleGround = createSprite(200, 350, 1000, 10)
  invisibleGround.visible = false;

  cave = createSprite(1000, 200, 20, 20)
  cave.setCollider("rectangle", 60, 0, 10, 200)
  cave.debug = true
  cave.addImage(caveImg)
  cave.visible = false;

  foxGroup = new Group();
  fruitGroup = new Group();
}

function draw() {


  if (gameState === PLAY && mode === "LEVEL1") {
    caveMan1.changeAnimation("run", caveMan1Img)
    caveMan1.visible = true

    if (background1.x < 430) {
      background1.x = width / 2;
    }
    background1.velocityX = -3


    if (keyDown(UP_ARROW) && caveMan1.y >= 100) {
      //caveMan2.visible=true
      // caveMan2.addImage(caveMan2Img)
      // caveMan1.visible=false
      caveMan1.velocityY = -13;
      caveMan1.changeAnimation("jump", caveMan2Img)
    }
    caveMan1.velocityY = caveMan1.velocityY + 0.8

    spawnFox();
    spawnFruitS();

    if (level1Score === 1) {

      cave.visible = true;
      cave.velocityX = -7

      foxGroup.setVelocityXEach(0);
      foxGroup.destroyEach()

      fruitGroup.setVelocityXEach(0);
      fruitGroup.destroyEach()

      if (caveMan1.isTouching(cave)) {
        // textSize(40);
        // fill("White");
        // text("YOU WIN ", 450, 200);
        // textSize(20);
        // fill("turquoise");
        // text("press 'N' for next level ", 450, 200);
       gameState=WIN
         mode="LEVEL1"

      }
    }

    caveMan1.collide(invisibleGround)
    drawSprites();


  }
  else if (gameState === END && mode === "LEVEL1") {

    caveMan1.visible = false

    background1.velocityX = 0
    foxGroup.setVelocityXEach(0);
    foxGroup.destroyEach()

    fruitGroup.setVelocityXEach(0);
    fruitGroup.destroyEach()

    textSize(40);
    fill("RED");
    text("YOU LOST ", 450, 200);
    textSize(20);
    fill("TURUOISE");
    text("Press 'R' to restart", 450, 240)

    if (keyDown("R")) {
      restart1();
    }

  }

  else if (gameState === WIN && mode === "LEVEL1") {
    caveMan1.visible=true
    background1.velocityX = 0
    drawSprites()
    textSize(40);
    fill("white");
    text("YOU WIN ", 450, 100);
    textSize(20);
    fill("turquoise");
    text("press 'N' for next level ", 450, 200);
  
   
    cave.depth=caveMan1.depth
    caveMan1.depth=caveMan1.depth+1
    caveMan1.changeAnimation("enterCave", caveMan3Img)
    cave.velocityX=0
    caveMan1.velocityX=0
    caveMan1.velocityY=0
    caveMan1.scale=0.4
    console.log(cave.depth)
    

    // caveman1.destroy();
    if (keyDown("N")) {
      gameState = PLAY2
      mode = "LEVEL2"
    }

  }

  textSize(20);
  fill("BLUE");
  text("FOOD: " + level1Score, 250, 30);

  textSize(20);
  fill("RED");
  text("DEATH " + level1Death, 150, 30);
}















