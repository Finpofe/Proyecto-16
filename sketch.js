var earth, earthImg;
var satelitte, satelitteImg;
var groundStationLeft, groundStationRight;
var groundStationLeftImg, groundStationRightImg;
var upLinkLeft,upLinkLeftImg;


function preload(){
  
satelitteImg = loadImage("other/satellite.png");
earthImg = loadImage("other/earth1.png");
groundStationRightImg = loadImage("other/gstation2.png");
groundStationLeftImg = loadImage("other/gstation1.png");

upLinkLeftImg = loadAnimation("leftu/upleft1.png", "leftu/upleft2.png", "leftu/upleft3.png", "leftu/upleft4.png", "leftu/upleft5.png", "leftu/upleft6.png", "leftu/upleft7.png", "leftu/upleft8.png");
  
upLinkRightImg = loadAnimation("rightu/upright1.png", "rightu/upright2.png", "rightu/upright3.png", "rightu/upright4.png", "rightu/upright5.png", "rightu/upright6.png", "rightu/upright7.png", "rightu/upright8.png");

dLinkrightImg = loadAnimation("rightd/dright1.png", "rightd/dright2.png", "rightd/dright3.png", "rightd/dright4.png", "rightd/dright5.png", "rightd/dright6.png", "rightd/dright7.png", "rightd/dright8.png");

dLinkleftImg = loadAnimation("leftd/dleft1.png", "leftd/dleft2.png", "leftd/dleft3.png", "leftd/dleft4.png", "leftd/dleft5.png", "leftd/dleft6.png", "leftd/dleft7.png", "leftd/dleft8.png");

  
}

function setup(){
  createCanvas(700,500);

  earth = createSprite(350,820,50,50);
  earth.addImage("earth", earthImg);
  earth.scale = 0.6;

  satelitte = createSprite(350,70,50,50);
  satelitte.addImage("satelitte", satelitteImg);
  satelitte.scale = 0.09;
  
  groundStationLeft = createSprite(50,430,50,50);
  groundStationLeft.addImage("stationleft", groundStationLeftImg);
  groundStationLeft.scale = 0.04;
  
  groundStationRight = createSprite(650,430,50,50);
  groundStationRight.addImage("stationright", groundStationRightImg);
  groundStationRight.scale = 0.04;
  
  upLinkLeft  = createSprite(190,270,10,100);
  upLinkLeft.addAnimation("upleft", upLinkLeftImg);
  upLinkLeft.scale = 0.07;
  
  upLinkRight  = createSprite(510,270,10,100);
  upLinkRight.addAnimation("upright", upLinkRightImg);
  upLinkRight.scale = 0.07;
  
  dLinkleft= createSprite(190, 270,10,100)
  dLinkleft.addAnimation("downlinkL",dLinkleftImg);
  dLinkleft.scale=0.07;
  
  dLinkright= createSprite(510, 270,10,100)
  dLinkright.addAnimation("downlinkR",dLinkrightImg);
  dLinkright.scale=0.07;
}

function draw(){
  background("black")
  
  upLinkLeft.visible = false;
  upLinkRight.visible = false;
  dLinkleft.visible = false;
  dLinkright.visible = false;
  
  if(keyDown("L")){
    upLinkLeft.visible = true;
  }
  
  if(keyDown("R")){
    upLinkRight.visible = true;
  }
  
  if(keyDown("LEFT_ARROW")){
    dLinkleft.visible = true;
  }
  
  if(keyDown("RIGHT_ARROW")){
    dLinkright.visible = true;
  }
  drawSprites();
  textSize(15);
  fill("white");
  text("Presiona Las teclas L & R", 5, 15)
  text("- para solicitar datos del satélite", 5, 30)
  text("Presiona las teckas de flecha Izquiera y Derecha", 5, 50)
  text("- para recibir datos del satélite", 5,65);
  
  textSize(15);
  fill("white");
  if(keyDown("L")){
     text("Solicitando datos del satélite", 10, 300)
     }
  
  if(keyDown("R")){
     text("Solicitando datos del satélite", 400, 300)
     }
  
  if(keyDown("LEFT_ARROW")){
     text("Transfiriendo datos a la estación base Izquierda", 10, 300)
     }
  
  if(keyDown("RIGHT_ARROW")){
     text("Transfiriendo datos a la estación base Derecha", 490, 300)
     }
}