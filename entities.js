function Entity(x, y, width, height) {
  //x and y are the top left of a rectangle
  this.xPos = x;
  this.yPos = y;
  this.width = width;
  this.height = height;
  this.xVel = 0;
  this.yVel = 0;
}

function processEntityMotion(entities) {
  for(var e = 0; e < entities.length; e++) {
    entities[e].xPos+=entities[e].xVel;
    entities[e].yPos+=entities[e].yVel;
    //console.log(entities[e]);
  }
}

//Using a single entity as a root for other entities to be relative to in position
//Subdivide the entity area for entities to
function setEntitySectors(entity) {
  var minSectorSize = 50;
  entity.sectors = new Object();
  xDivide = entity.width;
  while(xDivide > minSectorSize) {
    xDivide = xDivide/2;
  }
  if(xDivide < 50) xDivide = 50;
  yDivide = entity.height;
  while(yDivide > minSectorSize) {
    yDivide = yDivide/2;
  }
  if(yDivide < 50) yDivide = 50;

  console.log(xDivide);
  console.log(yDivide);
}
