// Make an instance of two and place it on the page.
var elem = document.getElementById('draw-shapes');
var params = { width: 1000, height: 800 };
var two = new Two(params).appendTo(elem);

let bullseye = two.makeGroup();
let shading = two.makeGroup();

let x = 400; 
let y = 250; 
let radius = 30; 
let bullseyeSize = 6;

function createBullsEye(){
    for (i = bullseyeSize; i > 0; i--){
        bullseye.add(two.makeCircle(x - i*i*3, y, radius * i));
        shading.add(two.makeCircle(x - i*i*3, y, radius * i)); 
    }
    
}

createBullsEye();

let r = 200; 
let g = 110; 
let b = 130;

function colorBullsEye(){
    for (i = 0; i < bullseyeSize; i++){
        bullseye.children[i].fill = 'rgb(' + r*(i/2) + ', ' + g*(i/2) + ', ' + b/2 + ')';
    }
}

bullseye.stroke = 'none';


shading.translation.x -= 15;
shading.fill = 'none';
shading.linewidth = 30;
shading.opacity = .1;
shading.children[0].stroke = 'none';

colorBullsEye();

let shouldLightenShading = false; 

function toggleShading(){

    if(shouldLightenShading){
        shading.opacity -= .005; 
    }
    else {
        shading.opacity += .005;
    }

    if(shading.opacity <= .1){
        shouldLightenShading = false; 
    }

    if (shading.opacity >= .8){
        shouldLightenShading = true;
    }
}


two.bind('update', function(frameCount) {
    if(frameCount % 2 == 0){
        toggleShading();
    }
   
  }).play();

two.update();