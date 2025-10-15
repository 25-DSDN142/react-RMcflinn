// ----=  Faces  =----
/* load images here */
function prepareInteraction() {
  //bgImage = loadImage('/images/background.png');
}

function drawInteraction(faces, hands) {

  // for loop to capture if there is more than one face on the screen. This applies the same process to all faces. 
  for (let i = 0; i < faces.length; i++) {
   for (let i = 0; i < faces.length; i++) {
    let face = faces[i]; // face holds all the keypoints of the face
    console.log(face);
    if (showKeypoints) {
      drawPoints(face);
    }

//variables to use 
// Face basics
let faceCenterX = face.faceOval.centerX;
let faceCenterY = face.faceOval.centerY;
let faceWidth = face.faceOval.width;
let faceHeight = face.faceOval.height;
// Left eye
let leftEyeCenterX = face.leftEye.centerX;
let leftEyeCenterY = face.leftEye.centerY;
let leftEyeWidth = face.leftEye.width;
let leftEyeHeight = face.leftEye.height;
// Right eye
let rightEyeCenterX = face.rightEye.centerX;
let rightEyeCenterY = face.rightEye.centerY;
let rightEyeWidth = face.rightEye.width;
let rightEyeHeight = face.rightEye.height;
// Nose tip
let noseTipX = face.keypoints[4].x;
let noseTipY = face.keypoints[4].y;

//EYE BAGS ----------------------------------------------------------------


let leftInnerX = leftEyeCenterX - leftEyeWidth /2;
let leftInnerY = leftEyeCenterY;

let leftOuterX = leftEyeCenterX + leftEyeWidth /2;
let leftOuterY = leftEyeCenterY;  


fill(115, 82, 53, 150);
stroke(0, 0, 0, 50);
strokeWeight(2);
arc(
  leftEyeCenterX, leftEyeCenterY-3, 
  leftEyeWidth * 1.2, leftEyeHeight * 3.5,              
  0.1, PI-0.1,                                         
);
  
fill(115, 82, 53, 150);
arc(
  rightEyeCenterX, rightEyeCenterY-3, 
  rightEyeWidth * 1.2, rightEyeHeight * 3.5,              
  0.1, PI-0.1,                                         
);

//the creases
//left
noFill();
stroke(0, 0, 0, 70);
arc(
  leftEyeCenterX, leftEyeCenterY-3, 
  leftEyeWidth * 1.2, leftEyeHeight * 2.9,              
  PI * 0.67, PI -0.1                                       
);


arc(
  leftEyeCenterX, leftEyeCenterY -3, 
  leftEyeWidth * 1.2, leftEyeHeight * 2.5,              
  PI * 0.25, PI-0.1                                         
);


//right
arc(
  rightEyeCenterX, rightEyeCenterY -3, 
  rightEyeWidth * 1.2, rightEyeHeight * 2.9,              
  0.1, PI -2,                                         
);

arc(
  rightEyeCenterX, rightEyeCenterY -3, 
  rightEyeWidth * 1.2, rightEyeHeight * 2.5,              
  0.1, PI -0.75,                                         
);


// EYES --------------------------------------------------------

// top left eye cemicircles for eyes 
fill(0);
noStroke();
arc(
  leftEyeCenterX, leftEyeCenterY+3, 
  leftEyeWidth * 1.2, leftEyeHeight * 2.5,              
  PI+0.1, TWO_PI-0.1                                           
);

// bottom left eye 
arc(
  leftEyeCenterX, leftEyeCenterY-3, 
  leftEyeWidth * 1.2, leftEyeHeight * 2,             
  0.1, PI-0.1                                                  
);

//top right eye
arc(
  rightEyeCenterX, rightEyeCenterY+3, 
  rightEyeWidth * 1.2, rightEyeHeight * 2.5,              
  PI+0.1, TWO_PI-0.1                                           
);

// bottom right eye
arc(
  rightEyeCenterX, rightEyeCenterY-3, 
  rightEyeWidth * 1.2, rightEyeHeight * 2,             
  0.1, PI-0.1                                                  
);

fill(255, 255, 255, 180);
ellipse(rightEyeCenterX -4, rightEyeCenterY -6, 2, 2);
ellipse(leftEyeCenterX -4, leftEyeCenterY -6, 2, 2);






















  } }

    /*
    Stop drawing on the face here
    */

}
  //------------------------------------------------------
  // You can make addtional elements here, but keep the face drawing inside the for loop. 


function drawX(X, Y) {
  push()

  strokeWeight(15)
  line(X - 20, Y - 20, X + 20, Y + 20)
  line(X - 20, Y + 20, X + 20, Y - 20)

  pop()
}


// This function draw's a dot on all the keypoints. It can be passed a whole face, or part of one. 
function drawPoints(feature) {

  push()
  for (let i = 0; i < feature.keypoints.length; i++) {
    let element = feature.keypoints[i];
    noStroke();
    fill(0, 255, 0);
    circle(element.x, element.y, 5);
  }
  pop()

}