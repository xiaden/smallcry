function calculate(){
var up=false,down=false, left=false, right=false, fire=false, shift=false,spacekey=false;
  for(var id in keys){
    if(keys[id]===87)up=true;
    if(keys[id]===83)down=true;
    if(keys[id]===65)left=true;
    if(keys[id]===68)right=true;
    if(keys[id]===16)shift=true;
    if(keys[id]===32)spacekey=true;
  }
  var cha=objects[0];
  if(right&&cha.velocityx<cha.velocity)cha.velocityx=cha.velocityx+.5;
  if(left&&cha.velocityx>-cha.velocity)cha.velocityx=cha.velocityx-.5;
  if(spacekey&&cha.velocityy>-cha.velocity&&cha.land===true){cha.velocityy=cha.velocityy-5; cha.land=false;}
  else if(up&&cha.velocityy>-cha.velocity&&cha.velocityy<0){cha.velocityy=cha.velocityy-0.05;cha.land=false;}
  if(down&&cha.velocityy<cha.velocity)cha.velocityy=cha.velocityy+.05;
  if(cha.land===false){cha.velocityy=cha.velocityy+.25;cha.velocityx=cha.velocityx*0.96;}
  else cha.velocityx=cha.velocityx*0.9;
  if(cha.x+cha.width+cha.velocityx>800){cha.x=800-cha.width;if(cha.land)cha.velocityx=0;else cha.velocityx=-cha.velocityx*0.6;}
  if(cha.x+cha.velocityx<0){cha.x=0;if(cha.land)cha.velocityx=0;else cha.velocityx=-cha.velocityx*0.6;}
  if(cha.y+cha.height+cha.velocityy>400){cha.y=400-cha.height;cha.velocityy=0;cha.land=true;}
  if(cha.y+cha.velocityy<0){cha.y=0;cha.velocityy=-cha.velocityy*0.8;}
  cha.x=cha.x+cha.velocityx*(frame/16);
  cha.y=cha.y+cha.velocityy*(frame/16);


 for(var did in objects){
if(did===0)break;
   if(objects[did].x*scale+objects[did].velocityx*scale+objects[did].width*scale<document.body.clientWidth)objects[did].x=objects[did].x+objects[did].velocityx;
   if(objects[did].y*scale+objects[did].velocityy*scale+objects[did].height*scale<document.body.clientHeight)objects[did].y=objects[did].y+objects[did].velocityy;
  }
}
