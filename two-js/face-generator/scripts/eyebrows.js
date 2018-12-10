eyebrowWidthSlider.addEventListener('input', function () {
    leftEyebrow.vertices[0].x = -parseInt(eyebrowWidthSlider.value);
    leftEyebrow.vertices[4].x = parseInt(eyebrowWidthSlider.value);

    rightEyebrow.vertices[0].x = -parseInt(eyebrowWidthSlider.value);
    rightEyebrow.vertices[4].x = parseInt(eyebrowWidthSlider.value);
});

eyebrowWidth2Slider.addEventListener('input', function () {
    leftEyebrow.vertices[1].x = -parseInt(eyebrowWidth2Slider.value);
    leftEyebrow.vertices[3].x = parseInt(eyebrowWidth2Slider.value);

    rightEyebrow.vertices[1].x = -parseInt(eyebrowWidth2Slider.value);
    rightEyebrow.vertices[3].x = parseInt(eyebrowWidth2Slider.value);
});

eyebrowHeight2Slider.addEventListener('input', function () {
    leftEyebrow.vertices[1].y = -parseInt(eyebrowHeight2Slider.value);
    leftEyebrow.vertices[3].y = parseInt(eyebrowHeight2Slider.value);

    rightEyebrow.vertices[1].y = -parseInt(eyebrowHeight2Slider.value);
    rightEyebrow.vertices[3].y = parseInt(eyebrowHeight2Slider.value);
});