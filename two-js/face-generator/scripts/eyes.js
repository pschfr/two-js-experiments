eyesHeightSlider.addEventListener('input', function () {
    leftEye.vertices[1].y = parseInt(eyesHeightSlider.value);
    rightEye.vertices[1].y = parseInt(eyesHeightSlider.value);
});

eyesWidthSlider.addEventListener('input', function () {
    leftEye.vertices[0].x = -parseInt(eyesWidthSlider.value);
    rightEye.vertices[0].x = parseInt(eyesWidthSlider.value);

    leftEye.vertices[2].x = parseInt(eyesWidthSlider.value);
    rightEye.vertices[2].x = -parseInt(eyesWidthSlider.value);
});

eyesRotationSlider.addEventListener('input', function () {
    leftEye.rotation = -parseFloat(eyesRotationSlider.value * .01);
    rightEye.rotation = parseFloat(eyesRotationSlider.value * .01);
});

eyesSpacingSlider.addEventListener('input', function () {
    leftEye.translation.x = parseInt(500 - eyesSpacingSlider.value);
    rightEye.translation.x = parseInt(eyesSpacingSlider.value);

    leftPupil.translation.x = eyesSpacingSlider.value - 170;
    rightPupil.translation.x = -eyesSpacingSlider.value + 170;
});


eyesYPosSlider.addEventListener('input', function () {
    leftEye.translation.y = eyesYPosSlider.value;
    rightEye.translation.y = eyesYPosSlider.value;

    leftPupil.translation.y = leftEye.translation.y - 210;
    rightPupil.translation.y = eyesYPosSlider.value - 210;
});



pupilsSpacingSlider.addEventListener('input', function () {
    leftPupil.translation.x = -parseInt(pupilsSpacingSlider.value);
    rightPupil.translation.x = parseInt(pupilsSpacingSlider.value);
});


pupilsYPosSlider.addEventListener('input', function () {
    leftPupil.translation.y = pupilsYPosSlider.value;
    rightPupil.translation.y = pupilsYPosSlider.value;
});