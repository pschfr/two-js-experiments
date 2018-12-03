// Make an instance of two and place it on the page.
var elem = document.getElementById('draw-face');
var params = { width: 400, height: 400 };
var two = new Two(params).appendTo(elem);

elem.style.backgroundColor = 'black';
elem.width = '200px;'
elem.style.border = '1px solid black';

let head = two.makeCurve(
    // TOP HALF 
  
    50, 80, // 0 -- forehead
    65, 60, // 1 -- crown

    150, 10, // 2 -- top of head 

    235, 60, // 3 -- crown
    250, 80, // 4 -- forehead

    

    // BOTTOM HALF
    260, 100, // 5 -- brow
    260, 180, // 6 -- upper cheek
    250, 230, // 7 -- lower cheek
    240, 250, // 8 -- chin 

    150, 290, // 9 -- bottom of chin 

    60, 250, // 10 -- chin 
    50, 230, // 11 -- lower cheek
    40, 180,  // 12 -- upper cheek

    40, 100, // 13 -- brow
    false
);


let leftEye = two.makeCurve(
    150 - 80, 140, 
    150 - 60, 130,
    150 - 40, 130,
    150 - 20, 140,
    false
);

let rightEye = two.makeCurve(
    150 + 80, 140, 
    150 + 60, 130,
    150 + 40, 130,
    150 + 20, 140,
    false
);

let nose = two.makeCurve(
    150 - 10, 160, 
    150 - 20, 210,
    150 - 30, 220,
    150 - 20, 230,

    150, 240,
    

    150 + 20, 230,
    150 + 30, 220,
    150 + 20, 210,
    150 + 10, 160,
    
    true
);

let upperLip = two.makePath(
    150 - 30, 260,
    150 - 10, 250,
    150, 255,
    150 + 10, 250, 
    150 + 30, 260,
    150 - 30, 260,
    true
);

let lowerLip = two.makeCurve(
    150 - 30, 260,
    150, 270, 
    150 + 30, 260,
    true
); 

let leftCheek = two.makeEllipse(
    150 - 70, 220, 28, 28
);

let rightCheek = two.makeEllipse(
    150 + 70, 220, 28, 28
);

let leftEyebrow = two.makeGroup();



// two.makeCurve(140, 90, 
//     142, 100, 
//     140, 110, 
//     true);

//     two.makeCurve(137, 92, 
//         139, 100,
//         137, 110,
//         true);

        
    
//         two.makeCurve(134, 94, 
//             136, 100,
//             134, 110,
//             true);

let headGroup = two.makeGroup(head, leftEye, rightEye, leftCheek, rightCheek, nose, upperLip, lowerLip);
headGroup.translation.x = '50';
headGroup.translation.y = '50';

topOfHeadHeightSlider.addEventListener('input', function(){
    head.vertices[2].y = parseInt(topOfHeadHeightSlider.value);
});

topOfHeadWidthSlider.addEventListener('input', function(){
    head.vertices[2].x = parseInt(topOfHeadWidthSlider.value);
});

crownWidthSlider.addEventListener('input', function(){
    head.vertices[1].x = -parseInt(crownWidthSlider.value);
    head.vertices[3].x = parseInt(crownWidthSlider.value);
});

crownHeightSlider.addEventListener('input', function(){
    head.vertices[1].y = parseInt(crownHeightSlider.value);
    head.vertices[3].y = parseInt(crownHeightSlider.value);
});


foreheadWidthSlider.addEventListener('input', function(){
    head.vertices[0].x = -parseInt(foreheadWidthSlider.value);
    head.vertices[4].x = parseInt(foreheadWidthSlider.value);
});

foreheadHeightSlider.addEventListener('input', function(){
    head.vertices[0].y = parseInt(foreheadHeightSlider.value);
    head.vertices[4].y = parseInt(foreheadHeightSlider.value);
});

browWidthSlider.addEventListener('input', function(){
    head.vertices[5].x = -parseInt(browWidthSlider.value);
    head.vertices[13].x = parseInt(browWidthSlider.value);
    
});

browHeightSlider.addEventListener('input', function(){
    head.vertices[5].y = parseInt(browHeightSlider.value);
    head.vertices[13].y = parseInt(browHeightSlider.value);
    
});

upperCheekWidthSlider.addEventListener('input', function(){
    head.vertices[6].x = -parseInt(upperCheekWidthSlider.value);
    head.vertices[12].x = parseInt(upperCheekWidthSlider.value);
});

upperCheekHeightSlider.addEventListener('input', function(){
    head.vertices[6].y = parseInt(upperCheekHeightSlider.value);
    head.vertices[12].y = parseInt(upperCheekHeightSlider.value);
});

lowerCheekWidthSlider.addEventListener('input', function(){
    head.vertices[7].x = -parseInt(lowerCheekWidthSlider.value);
    head.vertices[11].x = parseInt(lowerCheekWidthSlider.value);
});

lowerCheekHeightSlider.addEventListener('input', function(){
    head.vertices[7].y = parseInt(lowerCheekHeightSlider.value);
    head.vertices[11].y = parseInt(lowerCheekHeightSlider.value);
});

chinWidthSlider.addEventListener('input', function(){
    head.vertices[8].x = -parseInt(chinWidthSlider.value);
    head.vertices[10].x = parseInt(chinWidthSlider.value);
});

chinHeightSlider.addEventListener('input', function(){
    head.vertices[8].y = parseInt(chinHeightSlider.value);
    head.vertices[10].y = parseInt(chinHeightSlider.value);
});
    
chinTipYSlider.addEventListener('input', function(){
    head.vertices[9].y = parseInt(chinTipYSlider.value);
});

chinTipXSlider.addEventListener('input', function(){
    head.vertices[9].x = parseInt(chinTipXSlider.value);
});
    
        

two.bind('update', function (frameCount) {
    if(frameCount % 3 === 0){
    }
    
}).play();
            
two.update();