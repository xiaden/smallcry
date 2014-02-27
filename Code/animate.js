function animate(){
  // add in the debug information if debugging is turned on.
  if(debug===true){
    document.getElementById("keys").innerHTML="";
    for(var id=keys.length-1;id>=0;id--){document.getElementById("keys").innerHTML+=keys[id]+"<br />";}
    document.getElementById("keys").innerHTML+=window.mouseX+" "+window.mouseY+"<br />"+Math.round(1000/frame);
  }
  var context = canvas.getContext('2d');
  var grd;
  if(graddir===0){var grd=context.createRadialGradient((gradx++),grady,1920,(1920-gradx),(1080-grady),400);if(gradx>=1920)graddir++;}
  else if(graddir===1){var grd=context.createRadialGradient((gradx),(grady++),1920,(1920-gradx),(1080-grady),400);if(grady>=1080)graddir++;}
  else if(graddir===2){var grd=context.createRadialGradient((gradx--),(grady),1920,(1920-gradx),(1080-grady),400);if(gradx<=0)graddir++;}
  else if(graddir===3){var grd=context.createRadialGradient((gradx),(grady--),1920,(1920-gradx),(1080-grady),400);if(grady<=0)graddir=0;}

  grd.addColorStop(0,"#220000");
  grd.addColorStop(1,"#000022");
  // Fill with gradient
  context.fillStyle=grd;
  context.fillRect(0, 0, 1920, 1080);

  for(var did in objects){
    context.drawImage(objects[did].object, objects[did].x, objects[did].y, objects[did].width, objects[did].height);
  }
}
