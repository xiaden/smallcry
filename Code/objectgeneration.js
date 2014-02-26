function genanenemy(type,x,y,s){
var type=type||1;
    if (type==1){
console.log("gening an enemy");
  objects[objects.length]={};
  var e=objects[objects.length-1];
  e.type="enemy";
  e.object=new Image();
  e.object.src="Images/placeholder.png";
  e.width=32*scale;
  e.height=32*scale;
  e.x=x||Math.floor(Math.random()*800*scale-e.width);
  e.y=y||Math.floor(Math.random()*400*scale-e.width);
  e.velocityx=s||Math.floor(Math.random()*5*scale);
  e.velocityy=s||Math.floor(Math.random()*5*scale);
}



}

function genland(type,x,y,height,width){
  console.log("gening a LAND");
objects[objects.length]={};
  var e=objects[objects.length-1];
  e.type="land";
  e.object=new Image();
  e.object.src="Images/placeholder.png";
  e.x=x*scale;
  e.y=y*scale;
  e.height=height*scale;
  e.width=width*scale;
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
  e.x=objects[0].x+8*scale;
  e.y=objects[0].y+15*scale;
  e.height=1*scale;
  e.width=6*scale;
  e.velocityx=1*scale;
  e.velocityy=1*scale;
}
