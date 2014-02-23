function animate(){
  if(debug===true){
    document.getElementById("keys").innerHTML="";
    for(var id=keys.length-1;id>=0;id--){document.getElementById("keys").innerHTML+=keys[id]+"<br />";}
    document.getElementById("keys").innerHTML+=window.mouseX+" "+window.mouseY+"<br />"+Math.round(1000/frame);
  }
  var context = canvas.getContext('2d');
  var grd;
  if(graddir===0){var grd=context.createRadialGradient((gradx++)*scale,grady*scale,800*scale,(800-gradx)*scale,(400-grady)*scale,200*scale);if(gradx>=800)graddir++;}
  else if(graddir===1){var grd=context.createRadialGradient((gradx)*scale,(grady++)*scale,800*scale,(800-gradx)*scale,(400-grady)*scale,200*scale);if(grady>=400)graddir++;}
  else if(graddir===2){var grd=context.createRadialGradient((gradx--)*scale,(grady)*scale,800*scale,(800-gradx)*scale,(400-grady)*scale,200*scale);if(gradx<=0)graddir++;}
  else if(graddir===3){var grd=context.createRadialGradient((gradx)*scale,(grady--)*scale,800*scale,(800-gradx)*scale,(400-grady)*scale,200*scale);if(grady<=0)graddir=0;}

  grd.addColorStop(0,"#220000");
  grd.addColorStop(1,"#000022");
  // Fill with gradient
  context.fillStyle=grd;
  context.fillRect(0, 0, 800*scale, 400*scale);

  for(var did in objects){
    context.drawImage(objects[did].object, objects[did].x*scale, objects[did].y*scale, objects[did].width*scale, objects[did].height*scale);
  }
}
