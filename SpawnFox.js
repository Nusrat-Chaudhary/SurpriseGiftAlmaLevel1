
function spawnFox(){
    if (frameCount%200===0){
      fox=createSprite(1300,300,20,20)
     fox.y = Math.round(random(280, 300))
      fox.addAnimation("fox",foxImg)
      fox.scale=0.3
      fox.velocityX=-7
      foxGroup.add(fox)
  }
  if (caveMan1.isTouching(foxGroup)) {
    for(var k=0;k<foxGroup.length;k++){
    if(foxGroup.contains(foxGroup.get(k))){
    if(caveMan1.isTouching(foxGroup.get(k))){
    foxGroup.get(k).destroy();
   // caveMan1.destroy()
    gameState=END
    
  }}}
  }
  }
  

  //  ||(caveMan2.isTouching(foxGroup))

  //||(caveMan2.isTouching(foxGroup.get(k)))