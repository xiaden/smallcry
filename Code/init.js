function init(){
  //add the remaining stuff to the dom.
  var a=document.createElement("link");
  a.href="Style/style.css";
  a.rel="stylesheet";
  a.type="text/css";
  document.head.appendChild(a);
  for(var b=0;b<=5;b++){
    var c=document.createElement("script");
    c.type="text/javascript";
    switch(b){
      case 0:
          c.src="Code/Quadtree.js";
          break;
      case 1:
          c.src="Code/Keyhandler.js";
          break;
      case 2:
          c.src="Code/objectgeneration.js";
          break;
      case 3:
          c.src="Code/animate.js";
          break;
      case 4:
          c.src="Code/Calculate.js";
          break;
      case 5:
        c.src="Code/Core.js";
          break;
    }
    document.head.appendChild(c);
  }
  canvas=document.body.firstChild;//lazy, okay?  and you know, it'll break if anything gets inserted before it.
  if(document.body.clientWidth/2<document.body.clientHeight){
    canvas.style.width=document.body.clientWidth;
    canvas.width=document.body.clientWidth;
    scale=canvas.width/800;//designating the scale of the working area
    canvas.style.height=400*scale;
    canvas.height=400*scale;
  }
  else {
    canvas.style.height=document.body.clientHeight;
    canvas.height=document.body.clientHeight;
    scale=canvas.height/400;//designating the scale of the working area
    canvas.style.width=800*scale;
    canvas.width=800*scale;
  }
  window.onresize=(function(){
    var lastscale=scale;
  if(document.body.clientWidth/2<document.body.clientHeight){
    canvas.style.width=document.body.clientWidth;
    canvas.width=document.body.clientWidth;
    scale=canvas.width/800;//designating the scale of the working area
    canvas.style.height=400*scale;
    canvas.height=400*scale;
  }
  else {
    canvas.style.height=document.body.clientHeight;
    canvas.height=document.body.clientHeight;//have to set both, or it just auto...scales...things...remind me why I'm scaling this way?
    scale=canvas.height/400;//designating the scale of the working area
    canvas.style.width=800*scale;
    canvas.width=800*scale;
  }
    var fixedscale=scale/lastscale;
    for(var did in objects){
      objects[did].x=objects[did].x*fixedscale;
      objects[did].y=objects[did].y*fixedscale;
      objects[did].velocityx=objects[did].velocityx*fixedscale;
      objects[did].velocityy=objects[did].velocityy*fixedscale;
      objects[did].width=objects[did].width*fixedscale;
      objects[did].height=objects[did].height*fixedscale;
    }
  });
  gradx=0;
  grady=0;
  graddir=0;
  keys=[];
  objects=[];
  window.mouseX=0;
  window.mouseY=0;
  debug=true;
  objects[0]={};
  var e=objects[0];
  e.object=new Image();
  e.object.src="Images/placeholder.png";
  e.x=15*scale; //need to put these in reference to the cellmap
  e.y=15*scale; //and you know... flip y.
  e.lastx=15*scale;
  e.lasty=15*scale;
  e.velocity=5*scale;//Max speed
  e.velocityx=0;
  e.velocityy=0;
  e.width=32*scale;
  e.height=32*scale;
  e.type="character";
  e.land=false;
  e.deaths=0;
}
