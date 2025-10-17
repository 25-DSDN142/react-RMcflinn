// ----=  Faces  =----
/* load images here */
let hatImage;
function prepareInteraction() {
  hatImage = loadImage('images/2D_hat.png');
}

function drawInteraction(faces, hands) {

  image(hatImage, 200, 200)

  // for loop to capture if there is more than one face on the screen. This applies the same process to all faces. 
   for (let i = 0; i < faces.length; i++) {
    let face = faces[i]; // face holds all the keypoints of the face
    console.log(face);
    if (showKeypoints) {
      drawPoints(face);
    

//variables to use 
// Face basics
let faceCenterX = face.faceOval.centerX;
let faceCenterY = face.faceOval.centerY;
let faceWidth = face.faceOval.width;
let faceHeight = face.faceOval.height;

 // Right eyebrow
let rightEyebrowCenterX = face.rightEyebrow.centerX;
let rightEyebrowCenterY = face.rightEyebrow.centerY;
let rightEyebrowWidth = face.rightEyebrow.width;
let rightEyebrowHeight = face.rightEyebrow.height;

// Left eyebrow
let leftEyebrowCenterX = face.leftEyebrow.centerX;
let leftEyebrowCenterY = face.leftEyebrow.centerY;
let leftEyebrowWidth = face.leftEyebrow.width;
let leftEyebrowHeight = face.leftEyebrow.height;

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

// Lips
let lipsCenterX = face.lips.centerX;
let lipsCenterY = face.lips.centerY;
let lipsWidth = face.lips.width;
let lipsHeight = face.lips.height;

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
  
arc(
  rightEyeCenterX, rightEyeCenterY-3, 
  rightEyeWidth * 1.2, rightEyeHeight * 3.5,              
  0.1, PI-0.1,                                         
);

//the creases
//left
noFill();
stroke(0,0,0,50)
arc(
  leftEyeCenterX, leftEyeCenterY-3, 
  leftEyeWidth * 1.2, leftEyeHeight * 2.9,              
  PI * 0.67, PI -0.1                                       
);
stroke(62, 38, 79, 150)

arc(
  leftEyeCenterX, leftEyeCenterY -3, 
  leftEyeWidth * 1.2, leftEyeHeight * 2.5,              
  PI * 0.25, PI-0.1                                         
);


//right
stroke(0,0,0,50)
arc(
  rightEyeCenterX, rightEyeCenterY -3, 
  rightEyeWidth * 1.2, rightEyeHeight * 2.9,              
  0.1, PI -2,                                         
);
stroke(62, 38, 79, 150)

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
  leftEyeCenterX, leftEyeCenterY+2, 
  leftEyeWidth * 1.2, leftEyeHeight * 2.5,              
  PI+0.05, TWO_PI-0.05                                           
);

// bottom left eye 
arc(
  leftEyeCenterX, leftEyeCenterY-2, 
  leftEyeWidth * 1.2, leftEyeHeight * 2,             
  0.05, PI-0.05                                                 
);

//top right eye
arc(
  rightEyeCenterX, rightEyeCenterY+2, 
  rightEyeWidth * 1.2, rightEyeHeight * 2.5,              
  PI+0.05, TWO_PI-0.05                                           
);

// bottom right eye
arc(
  rightEyeCenterX, rightEyeCenterY-2, 
  rightEyeWidth * 1.2, rightEyeHeight * 2,             
  0.05, PI-0.05                                                 
);

//highlights
fill(255, 255, 255, 180);

ellipse(rightEyeCenterX -4, rightEyeCenterY -6, 2, 2);
ellipse(leftEyeCenterX -4, leftEyeCenterY -6, 2, 2);

//EYEBROWS ----------------------------------------------------

let rightEyebrowTopX = rightEyebrowCenterX + rightEyebrowWidth/2;
let rightEyebrowTopY = rightEyebrowCenterY - rightEyebrowHeight/2;

let leftEyebrowTopX = leftEyebrowCenterX - leftEyebrowWidth/2;      // Flipped X
let leftEyebrowTopY = leftEyebrowCenterY - leftEyebrowHeight/2;


strokeWeight(12);
stroke(1);
noFill();
strokeCap(PROJECT);  
//right eyebrow
arc(
rightEyebrowTopX + 10, rightEyebrowTopY +10,
rightEyebrowWidth *2.2, rightEyebrowHeight *2 ,
PI+ 0.07, TWO_PI - 2.2, 
);

//left eyebrow
arc(
leftEyebrowTopX - 10, leftEyebrowTopY + 10,
leftEyebrowWidth *2.2, leftEyebrowHeight *2 ,
 PI + 2.2, TWO_PI - 0.1
);

stroke(250)
strokeWeight(3);
line(rightEyebrowTopX-10, rightEyebrowTopY - 5, rightEyebrowTopX-10, rightEyebrowTopY- 10);
line(rightEyebrowTopX-5, rightEyebrowTopY - 5, rightEyebrowTopX-5, rightEyebrowTopY- 10);

line(leftEyebrowTopX+10, leftEyebrowTopY - 5, leftEyebrowTopX+10, leftEyebrowTopY- 10);
line(leftEyebrowTopX+5, leftEyebrowTopY - 5, leftEyebrowTopX+5, leftEyebrowTopY- 10);
//NOSE -----------------------------------------------------------------

//nose base
stroke(1, 20);
strokeWeight(2);
strokeCap(SQUARE)
fill(115, 82, 53, 150)
rect(noseTipX - 30, noseTipY+3, 60, 12, 3, 3, 30, 30);

//nose bridge and contourrrr
stroke(1, 70)
strokeWeight(3)
line(noseTipX - 30, noseTipY+5, noseTipX, noseTipY+ 1.5);
line(noseTipX + 30, noseTipY+5, noseTipX, noseTipY+ 1.5);
line(noseTipX - 7, noseTipY+15, noseTipX + 7, noseTipY+ 15);

//nostrils
fill(1, 150);
noStroke();
ellipse(noseTipX - 12, noseTipY+13, 12, 7);
ellipse(noseTipX + 12, noseTipY+13, 12, 7);






//MOUTH------------------------------------------------------
let topLipsCenterX = face.keypoints[11].x;
let topLipsCenterY = face.keypoints[11].y;
let bottomLipCenterY = face.keypoints[15].y;
let bottomLipCenterX = face.keypoints[15].x;

let mouthOpenness = abs(bottomLipCenterY - topLipsCenterY);
let mouthOpenThreshold = 15;
let isMouthOpen = mouthOpenness > mouthOpenThreshold;


stroke(0);
noFill()
strokeWeight(4);
arc(topLipsCenterX, topLipsCenterY + 5,
    lipsWidth * 1.2, lipsHeight * 0.3,  
    PI, TWO_PI
);

//TEETH------------------------------------------------

if (isMouthOpen) {  
    arc(bottomLipCenterX, bottomLipCenterY,
       lipsWidth *0.5, lipsHeight *0.1,
        0, PI);
  
strokeWeight(1);
fill(255);
    beginShape(TRIANGLES);
    vertex(bottomLipCenterX - 15, bottomLipCenterY);
    vertex(bottomLipCenterX, bottomLipCenterY);
    vertex(bottomLipCenterX - 5 , bottomLipCenterY -10);
    endShape();

    beginShape(TRIANGLES);
    vertex(bottomLipCenterX - 25, bottomLipCenterY - 2);
    vertex(bottomLipCenterX - 15, bottomLipCenterY);
    vertex(bottomLipCenterX -20 , bottomLipCenterY -10);
    endShape();

     beginShape(TRIANGLES);
    vertex(bottomLipCenterX, bottomLipCenterY);
    vertex(bottomLipCenterX + 10, bottomLipCenterY);
    vertex(bottomLipCenterX +5 , bottomLipCenterY -10);
    endShape();

     beginShape(TRIANGLES);
    vertex(bottomLipCenterX +10, bottomLipCenterY);
    vertex(bottomLipCenterX + 25, bottomLipCenterY -2);
    vertex(bottomLipCenterX + 20 , bottomLipCenterY -10);
    endShape();

     beginShape(TRIANGLES)
    vertex(topLipsCenterX+ 25, topLipsCenterY + 2)
    vertex(topLipsCenterX + 5, topLipsCenterY)
    vertex(topLipsCenterX +15, topLipsCenterY + 10)
    endShape()

     beginShape(TRIANGLES)
    vertex(topLipsCenterX+ 35, topLipsCenterY + 3)
    vertex(topLipsCenterX + 25, topLipsCenterY + 1)
    vertex(topLipsCenterX +30, topLipsCenterY + 10)
    endShape()

     beginShape(TRIANGLES)
    vertex(topLipsCenterX- 40, topLipsCenterY + 3)
    vertex(topLipsCenterX - 30, topLipsCenterY + 1)
    vertex(topLipsCenterX - 35, topLipsCenterY + 10)
    endShape()



}   
strokeWeight(1);
fill(237, 233, 185);
beginShape(TRIANGLES)
vertex(topLipsCenterX-20, topLipsCenterY + 2)
vertex(topLipsCenterX, topLipsCenterY)
vertex(topLipsCenterX - 10, topLipsCenterY + 10)
endShape()
    




//creases---------------------------------------------------------------------
strokeCap(ROUND);

strokeWeight(1);
line(noseTipX - 30, noseTipY + 25, topLipsCenterX - 45, topLipsCenterY - 10);
line(noseTipX - 25, noseTipY + 27, topLipsCenterX - 35, topLipsCenterY - 12);

line(noseTipX + 30, noseTipY + 25, topLipsCenterX + 45, topLipsCenterY - 10);
line(noseTipX + 25, noseTipY + 27, topLipsCenterX + 35, topLipsCenterY - 12);

let noseCenterX = face.keypoints[8].x;
let noseCenterY = face.keypoints[8].y;
let noseTopX = face.keypoints[9].x;
let noseTopY = face.keypoints[9].y;

line(noseTopX, noseTopY - 3, noseCenterX, noseCenterY);
line(noseTopX + 6, noseTopY, noseCenterX + 4, noseCenterY - 2);
line(noseTopX - 6, noseTopY, noseCenterX -4, noseCenterY - 2);














































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