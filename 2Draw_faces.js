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
//My Variables ---------------------------
// Left eye
let leftInnerX = leftEyeCenterX + leftEyeWidth * 0.43;
let leftInnerY = leftEyeCenterY;
let leftOuterX = leftEyeCenterX - leftEyeWidth * 0.43;
let leftOuterY = leftEyeCenterY;
let leftTopX = leftEyeCenterX;
let leftTopY = leftEyeCenterY - leftEyeHeight * 0.63;
let leftBottomX = leftEyeCenterX;
let leftBottomY = leftEyeCenterY + leftEyeHeight * 0.43;

// Right eye 
let rightInnerX = rightEyeCenterX - rightEyeWidth * 0.4;
let rightInnerY = rightEyeCenterY;
let rightOuterX = rightEyeCenterX + rightEyeWidth * 0.4;
let rightOuterY = rightEyeCenterY;
let rightTopX = rightEyeCenterX;
let rightTopY = rightEyeCenterY - rightEyeHeight * 0.6;
let rightBottomX = rightEyeCenterX;
let rightBottomY = rightEyeCenterY + rightEyeHeight * 0.4;
// FACE --------------------------------------------------------

beginShape();
vertex(leftInnerX, leftInnerY); //inner corner

// Upper curve
bezierVertex(
  leftInnerX * 0.8 + leftTopX * 0.2, leftTopY - 3,  // Control 1
  leftTopX - 1.5, leftTopY,                               // Anchor top
  leftTopX * 0.7 + leftOuterX * 0.3, leftTopY + 3   // Control 2
);

vertex(leftOuterX, leftOuterY); // Outer corner

// Lower curve  
bezierVertex(
  leftOuterX * 0.8 + leftBottomX * 0.2, leftBottomY + 3, 
  leftBottomX, leftBottomY,                               
  leftBottomX * 0.7 + leftInnerX * 0.3, leftBottomY + 2   
);

vertex(leftInnerX, leftInnerY); 
endShape(CLOSE);




















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