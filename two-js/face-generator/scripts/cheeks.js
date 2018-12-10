cheeksWidthSlider.addEventListener('input', function(){
    leftCheek.width = parseFloat(cheeksWidthSlider.value);
    rightCheek.width = parseFloat(cheeksWidthSlider.value);
})

cheeksHeightSlider.addEventListener('input', function(){
    leftCheek.height = parseFloat(cheeksHeightSlider.value);
    rightCheek.height = parseFloat(cheeksHeightSlider.value);
})

cheeksSpacingSlider.addEventListener('input', function () {
    leftCheek.translation.x = parseInt(500 - cheeksSpacingSlider.value);
    rightCheek.translation.x = parseInt(cheeksSpacingSlider.value);
});

cheeksYPosSlider.addEventListener('input', function () {
    leftCheek.translation.y = parseInt(cheeksYPosSlider.value);
    rightCheek.translation.y = parseInt(cheeksYPosSlider.value);
});