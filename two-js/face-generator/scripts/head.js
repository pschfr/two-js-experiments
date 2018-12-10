headTipSlider.addEventListener('input', function(){
    head.vertices[0].y = parseInt(headTipSlider.value);
    head.vertices[8].y = parseInt(headTipSlider.value);
});

foreheadWidthSlider.addEventListener('input', function(){
    head.vertices[1].x = -parseInt(foreheadWidthSlider.value);
    head.vertices[7].x = parseInt(foreheadWidthSlider.value);
});

cheekWidthSlider.addEventListener('input', function(){
    head.vertices[2].x = -parseInt(cheekWidthSlider.value);
    head.vertices[6].x = parseInt(cheekWidthSlider.value);
});

chinWidthSlider.addEventListener('input', function(){
    head.vertices[3].x = -parseInt(chinWidthSlider.value);
    head.vertices[5].x = parseInt(chinWidthSlider.value);
});

chinHeightSlider.addEventListener('input', function(){
    head.vertices[3].y = parseInt(chinHeightSlider.value);
    head.vertices[5].y = parseInt(chinHeightSlider.value);
});

chinTipSlider.addEventListener('input', function(){
    head.vertices[4].y = parseInt(chinTipSlider.value);
});

