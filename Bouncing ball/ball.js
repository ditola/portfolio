//Set global variable that would contain the position, velocity and the html element "ball"
var positionX = 0;
var velocity = 100;
var ball = document.getElementById('ball');
var reverse = false;

//write a function that can change the position of the html element "ball"
function moveBall() {
  // two fixed x-axis coordinates (you will use these variable in step 3)
  var Xmin = 0;
  var Xmax = 300;

  switch(reverse){
    case false:
      if (positionX < Xmax) positionX = positionX + velocity;
      else reverse = true;
      break;

    case true:
      if (positionX > Xmin) positionX = positionX - velocity;
      else reverse = false;
      break;
  }

  ball.style.left = positionX + 'px';
}

// This call the moveBall function every 100ms
setInterval(moveBall, 100);
