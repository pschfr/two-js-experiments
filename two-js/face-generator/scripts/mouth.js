mouthWidthSlider.addEventListener('input', function () {
    mouth.vertices[0].x = -parseInt(mouthWidthSlider.value);
    mouth.vertices[4].x = parseInt(mouthWidthSlider.value);
});

mouthHeightSlider.addEventListener('input', function () {
    mouth.vertices[2].y = parseInt(mouthHeightSlider.value);
});

mouthWidth2Slider.addEventListener('input', function () {
    mouth.vertices[1].x = -parseInt(mouthWidth2Slider.value);
    mouth.vertices[3].x = parseInt(mouthWidth2Slider.value);
});

mouthHeight2Slider.addEventListener('input', function () {
    mouth.vertices[1].y = parseInt(mouthHeight2Slider.value);
    mouth.vertices[3].y = parseInt(mouthHeight2Slider.value);
});

mouthYPosSlider.addEventListener('input', function () {
    mouth.translation.y = parseInt(mouthYPosSlider.value);
});