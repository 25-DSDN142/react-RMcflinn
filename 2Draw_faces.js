// ----= Faces =----
let hatImage;

function prepareInteraction() {
  hatImage = loadImage('images/2Ds_hat.png');
}

function drawInteraction(faces, hands) {
  for (let i = 0; i < faces.length; i++) {
    let face = faces[i];
    console.log(face);
    
    if (showKeypoints) {
      drawPoints(face);
    }

    // Face basics
    let faceCenterX = face.faceOval.centerX;
    let faceCenterY = face.faceOval.centerY;
    let faceWidth = face.faceOval.width;
    let faceHeight = face.faceOval.height;

    // Eyebrows
    let rightEyebrowCenterX = face.rightEyebrow.centerX;
    let rightEyebrowCenterY = face.rightEyebrow.centerY;
    let rightEyebrowWidth = face.rightEyebrow.width;
    let rightEyebrowHeight = face.rightEyebrow.height;

    let leftEyebrowCenterX = face.leftEyebrow.centerX;
    let leftEyebrowCenterY = face.leftEyebrow.centerY;
    let leftEyebrowWidth = face.leftEyebrow.width;
    let leftEyebrowHeight = face.leftEyebrow.height;

    // Eyes
    let leftEyeCenterX = face.leftEye.centerX;
    let leftEyeCenterY = face.leftEye.centerY;
    let leftEyeWidth = face.leftEye.width;
    let leftEyeHeight = face.leftEye.height;
    
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

    // EYE BAGS--------------------------------------------------------
    fill(115, 82, 53, 150);
    stroke(0, 0, 0, 50);
    strokeWeight(2);
    arc(leftEyeCenterX, leftEyeCenterY-3, leftEyeWidth * 1.2, leftEyeHeight * 3.5, 0.1, PI-0.1);
    arc(rightEyeCenterX, rightEyeCenterY-3, rightEyeWidth * 1.2, rightEyeHeight * 3.5, 0.1, PI-0.1);

    // Eye creases - left
    noFill();
    stroke(0, 0, 0, 50);
    arc(leftEyeCenterX, leftEyeCenterY-3, leftEyeWidth * 1.2, leftEyeHeight * 2.9, PI * 0.67, PI -0.1);
    stroke(62, 38, 79, 150);
    arc(leftEyeCenterX, leftEyeCenterY -3, leftEyeWidth * 1.2, leftEyeHeight * 2.5, PI * 0.25, PI-0.1);

    // Eye creases - right
    stroke(0, 0, 0, 50);
    arc(rightEyeCenterX, rightEyeCenterY -3, rightEyeWidth * 1.2, rightEyeHeight * 2.9, 0.1, PI -2);
    stroke(62, 38, 79, 150);
    arc(rightEyeCenterX, rightEyeCenterY -3, rightEyeWidth * 1.2, rightEyeHeight * 2.5, 0.1, PI -0.75);

    // EYES
    fill(0);
    noStroke();
    arc(leftEyeCenterX, leftEyeCenterY+2, leftEyeWidth * 1.2, leftEyeHeight * 2.5, PI+0.05, TWO_PI-0.05);
    arc(leftEyeCenterX, leftEyeCenterY-2, leftEyeWidth * 1.2, leftEyeHeight * 2, 0.05, PI-0.05);
    arc(rightEyeCenterX, rightEyeCenterY+2, rightEyeWidth * 1.2, rightEyeHeight * 2.5, PI+0.05, TWO_PI-0.05);
    arc(rightEyeCenterX, rightEyeCenterY-2, rightEyeWidth * 1.2, rightEyeHeight * 2, 0.05, PI-0.05);

    // Highlights
    fill(255, 255, 255, 180);
    ellipse(rightEyeCenterX -4, rightEyeCenterY -6, 2, 2);
    ellipse(leftEyeCenterX -4, leftEyeCenterY -6, 2, 2);



    // EYEBROWS------------------------------------------------------
    let rightEyebrowTopX = rightEyebrowCenterX + rightEyebrowWidth/2;
    let rightEyebrowTopY = rightEyebrowCenterY - rightEyebrowHeight/2;
    let leftEyebrowTopX = leftEyebrowCenterX - leftEyebrowWidth/2;
    let leftEyebrowTopY = leftEyebrowCenterY - leftEyebrowHeight/2;

    strokeWeight(12);
    stroke(1);
    noFill();
    strokeCap(PROJECT);
    arc(rightEyebrowTopX + 10, rightEyebrowTopY +10, rightEyebrowWidth *2.2, rightEyebrowHeight *2, PI+ 0.07, TWO_PI - 2.2);
    arc(leftEyebrowTopX - 10, leftEyebrowTopY + 10, leftEyebrowWidth *2.2, leftEyebrowHeight *2, PI + 2.2, TWO_PI - 0.1);

    stroke(250);
    strokeWeight(3);
    line(rightEyebrowTopX-10, rightEyebrowTopY-10, rightEyebrowTopX-10, rightEyebrowTopY- 20);
    line(rightEyebrowTopX-5, rightEyebrowTopY-10, rightEyebrowTopX-5, rightEyebrowTopY- 20);
    line(leftEyebrowTopX+10, leftEyebrowTopY-10, leftEyebrowTopX+10, leftEyebrowTopY- 20);
    line(leftEyebrowTopX+5, leftEyebrowTopY-10, leftEyebrowTopX+5, leftEyebrowTopY- 20);



    // NOSE---------------------------------------------------------
    stroke(1, 20);
    strokeWeight(2);
    strokeCap(SQUARE);
    fill(115, 82, 53, 150);
    rect(noseTipX - 35, noseTipY+3, 70, 22, 3, 3, 30, 30);

    stroke(1, 70);
    strokeWeight(3);
    line(noseTipX - 35, noseTipY+5, noseTipX, noseTipY+ 1.5);
    line(noseTipX + 35, noseTipY+5, noseTipX, noseTipY+ 1.5);
    line(noseTipX - 15, noseTipY+23, noseTipX + 15, noseTipY+ 23);

    fill(1, 150);
    noStroke();
    ellipse(noseTipX - 17, noseTipY+20, 15, 10);
    ellipse(noseTipX + 17, noseTipY+20, 15, 10);



    // MOUTH-----------------------------------------------------------
    let topLipsCenterX = face.keypoints[11].x;
    let topLipsCenterY = face.keypoints[11].y;
    let bottomLipCenterX = face.keypoints[15].x;
    let bottomLipCenterY = face.keypoints[15].y;

    let mouthOpenness = abs(bottomLipCenterY - topLipsCenterY);
    let mouthOpenThreshold = 25;
    let isMouthOpen = mouthOpenness > mouthOpenThreshold;

    stroke(0);
    noFill();
    strokeWeight(4);
    arc(topLipsCenterX, topLipsCenterY + 5, lipsWidth * 1.2, lipsHeight * 0.3, PI, TWO_PI);



    // TEETH--------------------------------------------------------
    if (isMouthOpen) {
      arc(bottomLipCenterX, bottomLipCenterY, lipsWidth *0.5, lipsHeight *0.1, 0, PI);
      
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

      beginShape(TRIANGLES);
      vertex(topLipsCenterX+ 25, topLipsCenterY + 2);
      vertex(topLipsCenterX + 5, topLipsCenterY);
      vertex(topLipsCenterX +15, topLipsCenterY + 10);
      endShape();

      beginShape(TRIANGLES);
      vertex(topLipsCenterX+ 35, topLipsCenterY + 3);
      vertex(topLipsCenterX + 25, topLipsCenterY + 1);
      vertex(topLipsCenterX +30, topLipsCenterY + 10);
      endShape();

      beginShape(TRIANGLES);
      vertex(topLipsCenterX- 40, topLipsCenterY + 3);
      vertex(topLipsCenterX - 30, topLipsCenterY + 1);
      vertex(topLipsCenterX - 35, topLipsCenterY + 10);
      endShape();
    }

    strokeWeight(1);
    fill(237, 233, 185);
    beginShape(TRIANGLES);
    vertex(topLipsCenterX-20, topLipsCenterY + 2);
    vertex(topLipsCenterX, topLipsCenterY);
    vertex(topLipsCenterX - 10, topLipsCenterY + 10);
    endShape();

    // CREASES----------------------------------------------------------
    strokeCap(ROUND);
    strokeWeight(1);
    line(noseTipX - 30, noseTipY + 35, topLipsCenterX - 45, topLipsCenterY - 20);
    line(noseTipX - 25, noseTipY + 37, topLipsCenterX - 35, topLipsCenterY - 22);
    line(noseTipX + 30, noseTipY + 35, topLipsCenterX + 45, topLipsCenterY - 20);
    line(noseTipX + 25, noseTipY + 37, topLipsCenterX + 35, topLipsCenterY - 22);

    let noseCenterX = face.keypoints[8].x;
    let noseCenterY = face.keypoints[8].y;
    let noseTopX = face.keypoints[9].x;
    let noseTopY = face.keypoints[9].y;
    line(noseTopX, noseTopY - 3, noseCenterX, noseCenterY);
    line(noseTopX + 6, noseTopY, noseCenterX + 4, noseCenterY - 2);
    line(noseTopX - 6, noseTopY, noseCenterX -4, noseCenterY - 2);

    // HAT----------------------------------------------------------
    let headLeftX = face.keypoints[54].x;
    let headRightX = face.keypoints[284].x;
    let headTopY = face.keypoints[10].y;
    let headCenterX = (headLeftX + headRightX) / 2;
    let headWidth = headRightX - headLeftX;
    let hatWidth = headWidth * 1.6;
    let hatHeight = headWidth * 1.6;

    push();
    imageMode(CENTER);
    image(hatImage, headCenterX, headTopY-5, hatWidth, hatHeight);
    pop();
  }
}

function drawX(X, Y) {
  push();
  strokeWeight(15);
  line(X - 20, Y - 20, X + 20, Y + 20);
  line(X - 20, Y + 20, X + 20, Y - 20);
  pop();
}

function drawPoints(feature) {
  push();
  for (let i = 0; i < feature.keypoints.length; i++) {
    let element = feature.keypoints[i];
    noStroke();
    fill(0, 255, 0);
    circle(element.x, element.y, 5);
  }
  pop();
}