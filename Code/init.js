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
    canvas.width=document.body.clientWidth; //theres something weird going on here...
    scale=canvas.width/800;//designating the scale of the document
    canvas.style.height=400*scale;
    canvas.height=400*scale;
  }
  else {
    canvas.style.height=document.body.clientHeight;
    canvas.height=document.body.clientHeight;
    scale=canvas.height/400;
    canvas.style.width=800*scale;
    canvas.width=800*scale;
  }
  window.onresize=(function(){
  if(document.body.clientWidth/2<document.body.clientHeight){
    canvas.style.width=document.body.clientWidth;
    canvas.width=document.body.clientWidth; //theres something weird going on here...
    scale=canvas.width/800;//designating the scale of the document
    canvas.style.height=400*scale;
    canvas.height=400*scale;
  }
  else {
    canvas.style.height=document.body.clientHeight;
    canvas.height=document.body.clientHeight;
    scale=canvas.height/400;
    canvas.style.width=800*scale;
    canvas.width=800*scale;
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
  e.x=15; //need to put these in reference to the cellmap
  e.y=15; //and you know... flip y.
  e.lastx=15;
  e.lasty=15;
  e.velocity=20;//Max speed
  e.velocityx=0;
  e.velocityy=0;
  e.width=32;
  e.height=32;
  e.type="character";
  e.land=false;
  e.deaths=0;
}
