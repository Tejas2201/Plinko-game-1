var car,wall;
var speed,weight;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;



function setup() {
  createCanvas(480,800);
  //createSprite(400, 200, 50, 50);
  car = createSprite(50,200,50,50);
  car.shapeColor=color(255);
  
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor=color(80,80,80);

  speed = random(55,90)
  car.velocityX = speed;
  weight = random(400,1500)

}



function draw() {
  background(0);  


  if(wall.x-car.x<(car.width+wall.width)/2)
  {
    car.velocityX = 0;
    var deformation=0.5 * weight * speed * speed/22509;
    
    if(deformation>180)
    {
        car.shapeColor=color(255,0,0);
    }

    if(deformation<180 && deformation>100)
    {
      car.shapeColor=color(230,230,0);
    }

    if(deformation<100)
    {
      car.shapeColor=color(0,255,0);
    }
  
  }
  
  
  
  
  
  drawSprites();

  
}

for (var k=0; k <=width; k=k+80) {
  divisions.push(new divisions(k, height-divisionHeight/2, 10, divisionHeight));
}

for (var j=40; j <=width; j=j+50)
{
  plinkos.push(new Plinko(j,75));
}
for (var j=15; j <=width-10; j=j+50)
{
  plinkos.push(new Plinko(j,175));
}

if(frameCount%90===0){
  particles.push(new Particle(random(width/2-10, width/2+10),10,10));
}

for (var j = 0; j < particles.length; j++){
  particles[j].display();
}
for (var k = 0; k < divisions.length; k++){
  divisions[k].display();
}