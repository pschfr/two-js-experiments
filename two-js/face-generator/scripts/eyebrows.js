eyebrowWidthSlider.addEventListener('input', function () {
    leftEyebrow.vertices[0].x = -parseInt(eyebrowWidthSlider.value);
    leftEyebrow.vertices[4].x = parseInt(eyebrowWidthSlider.value);

    rightEyebrow.vertices[0].x = -parseInt(eyebrowWidthSlider.value);
    rightEyebrow.vertices[4].x = parseInt(eyebrowWidthSlider.value);
});

eyebrowHeightSlider.addEventListener('input', function () {
    leftEyebrow.vertices[0].y = parseInt(eyebrowHeightSlider.value);
    leftEyebrow.vertices[4].y = parseInt(eyebrowHeightSlider.value);

    rightEyebrow.vertices[0].y = parseInt(eyebrowHeightSlider.value);
    rightEyebrow.vertices[4].y = parseInt(eyebrowHeightSlider.value);
});

eyebrowWidth2Slider.addEventListener('input', function () {
    leftEyebrow.vertices[1].x = -parseInt(eyebrowWidth2Slider.value);
    leftEyebrow.vertices[3].x = parseInt(eyebrowWidth2Slider.value);

    rightEyebrow.vertices[1].x = -parseInt(eyebrowWidth2Slider.value);
    rightEyebrow.vertices[3].x = parseInt(eyebrowWidth2Slider.value);
});

eyebrowHeight2Slider.addEventListener('input', function () {
    leftEyebrow.vertices[1].y = parseInt(eyebrowHeight2Slider.value);
    leftEyebrow.vertices[3].y = parseInt(eyebrowHeight2Slider.value);

    rightEyebrow.vertices[1].y = parseInt(eyebrowHeight2Slider.value);
    rightEyebrow.vertices[3].y = parseInt(eyebrowHeight2Slider.value);
});



eyebrowYPosSlider.addEventListener('input', function () {
    leftEyebrow.translation.y = parseInt(eyebrowYPosSlider.value);
    rightEyebrow.translation.y = parseInt(eyebrowYPosSlider.value);

});


eyebrowThicknessSlider.addEventListener('input', function () {
    leftEyebrow.linewidth = parseFloat(eyebrowThicknessSlider.value / 2);
    rightEyebrow.linewidth = parseFloat(eyebrowThicknessSlider.value / 2);

});

eyebrowSpacingSlider.addEventListener('input', function () {
    leftEyebrow.translation.x = parseInt(500 - eyebrowSpacingSlider.value);
    rightEyebrow.translation.x = parseInt(eyebrowSpacingSlider.value);
});




eyebrowRotationSlider.addEventListener('input', function () {
    leftEyebrow.rotation = -parseFloat(eyebrowRotationSlider.value * .01);
    rightEyebrow.rotation = parseFloat(eyebrowRotationSlider.value * .01);
});