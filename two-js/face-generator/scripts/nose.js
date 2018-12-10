noseWidthSlider.addEventListener('input', function(){
    nose.vertices[0].x = -parseInt(noseWidthSlider.value);
    nose.vertices[4].x = parseInt(noseWidthSlider.value);
});



noseHeightSlider.addEventListener('input', function(){
    nose.vertices[0].y = parseInt(noseHeightSlider.value);
    nose.vertices[4].y = parseInt(noseHeightSlider.value);
});


noseWidth2Slider.addEventListener('input', function(){
    nose.vertices[1].x = -parseInt(noseWidth2Slider.value);
    nose.vertices[3].x = parseInt(noseWidth2Slider.value);
});

noseHeight2Slider.addEventListener('input', function(){
    nose.vertices[1].y = parseInt(noseHeight2Slider.value);
    nose.vertices[3].y = parseInt(noseHeight2Slider.value);
});

noseTipSlider.addEventListener('input', function(){
    nose.vertices[2].y = parseInt(noseTipSlider.value);

});



noseRotationSlider.addEventListener('input', function(){
    nose.rotation = parseFloat(noseRotationSlider.value * .01);

});