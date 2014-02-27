function keyadd(){
  var used=false;
  for(var iid in keys){
    if(keys[iid]==event.keyCode)used=true;
    }
  if(!used){keys[keys.length]=event.keyCode;
                 }
}

function keydel(){
  if(event.keyCode==32)objects[0].jumpmod=0;
  for(var id=keys.length-1;id>=0;id--){
    if(keys[id]==event.keyCode){keys.splice(id,1);}
  }
}


function mouse(){
  window.mouseX = event.clientX;
  window.mouseY = event.clientY;
}

function listeners(){
  document.body.addEventListener("keydown",keyadd);
  document.body.addEventListener("keyup",keydel);
  document.body.addEventListener("mousemove",mouse);
}
listeners();
