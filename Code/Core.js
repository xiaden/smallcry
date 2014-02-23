var lasttime=window.performance.now();

function gameloop(timestamp){
  if(state=="running"){
    elapsed=timestamp-start;
    frame=timestamp-lasttime;  //this is for performance calculations and animations.
    lasttime=timestamp;
    calculate();
    //quaddetect();
    //raydetect();
    animate();
    window.requestAnimationFrame(gameloop);
  }
  else if(state==="pausing"){}
  else if(state==="paused"){
    animate();
    window.requestAnimationFrame(gameloop);
  }
}
start=window.performance.now();
lasttime=start;
state="running";
window.requestAnimationFrame(gameloop);
