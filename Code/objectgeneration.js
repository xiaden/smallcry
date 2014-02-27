function genanenemy(type,x,y,s){
var type=type||1;
    if (type==1){
console.log("gening an enemy");
  objects[objects.length]={};
  var e=objects[objects.length-1];
  e.type="enemy";
  e.object=new Image();
  e.object.src="Images/placeholder.png";
  e.width=32;
  e.height=32;
  e.x=x||Math.floor(Math.random()*800-e.width);
  e.y=y||Math.floor(Math.random()*400-e.width);
  e.velocityx=s||Math.floor(Math.random()*5);
  e.velocityy=s||Math.floor(Math.random()*5);
}



}

function genland(type,x,y,height,width){
  console.log("gening a LAND");
objects[objects.length]={};
  var e=objects[objects.length-1];
  e.type="land";
  e.object=new Image();
  e.object.src="Images/placeholder.png";
  e.x=x;
  e.y=y;
  e.height=height;
  e.width=width;
  e.landtype=type;
  e.velocityx=0;
  e.velocityy=0;
}

function genshot(){
  console.log("gening DESTRUCTION");
objects[objects.length]={};
  var e=objects[objects.length-1];
  e.type="shot";
  e.object=new Image();
  e.object.src="Images/placeholder.png";
  e.x=objects[0].x+8;
  e.y=objects[0].y+15;
  e.height=1;
  e.width=6;
  e.velocityx=1;
  e.velocityy=1;
}
