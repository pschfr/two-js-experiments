
var elem = document.getElementById('draw-pattern');
var params = {
    width: 500,
    height: 500
};

var two = new Two(params).appendTo(elem);

function ladybugs(){

  elem.style.backgroundColor = 'skyblue';
  x = 50;
  y = 50;
  let iVal = 10;
  let jVal = 10;
  let kVal = 10;
  
  let ladybug = two.makeGroup();
  let wings = two.makeGroup();
  let head = two.makeGroup();
  let antennae = two.makeGroup();
  let spots = two.makeGroup();
  
  for (i = 1; i < iVal; i++) {
      for (j = 1; j < jVal; j++) {
          for (k = kVal; k > 0; k--) {
              ladybug.add(two.makeCircle(x * i, y * j, 10));
              wings.add(two.makeCurve(x * i - 10, y * j - 10,
                  x * i, y * j,
                  x * i, y * j + 10, false));
              wings.add(two.makeCurve(x * i + 10, y * j - 10,
                  x * i, y * j,
                  x * i, y * j + 10, false));
              head.add(two.makeCircle(x * i, y * j + 8, 6));
              antennae.add(two.makeCurve(x * i - 2, y * j + 12, x * i - 2, y * j + 18, x * i - 5, y * j + 21, true));
              antennae.add(two.makeCurve(x * i + 2, y * j + 12, x * i + 2, y * j + 18, x * i + 5, y * j + 21, true));
              spots.add(two.makeCircle(x * i, y * j + 3, 3));
              spots.add(two.makeCircle(x * i - 8, y * j - 3, 2));
              spots.add(two.makeCircle(x * i + 8, y * j - 3, 2));
              spots.add(two.makeCircle(x * i - 6, y * j + 4, 1));
              spots.add(two.makeCircle(x * i + 6, y * j + 4, 1));
          }
  
      }
  }


  
  let wholeLadybug = two.makeGroup(ladybug, head, wings, antennae, spots);
  
  
  ladybug.fill = 'black';
  head.fill = 'black';
  wings.fill = 'red';
  wings.stroke = 'darkred';
  wings.linewidth = .5;
  spots.fill = 'black';
  antennae.fill = 'none';
  

}

function faces(){

  elem.style.backgroundColor = 'tan';

x = 50;
y = 50;

let head = two.makeGroup();
let leftEye = two.makeGroup();
let leftPupil = two.makeGroup();
let rightEye = two.makeGroup();
let rightPupil = two.makeGroup();
let nose = two.makeGroup();
let mouth = two.makeGroup();
let leftEyebrow = two.makeGroup();
let rightEyebrow = two.makeGroup();
let cheeks = two.makeGroup();
let shadow = two.makeGroup();
let decoration = two.makeGroup();
let decorationShadow = two.makeGroup();

for (i = 0; i < 15; i++) {
  for (j = 0; j < 15; j++) {
    for (k = 1; k > 0; k--) {
      shadow.add(two.makeCircle(x * i + 4, y * j, k * 22));
      head.add(two.makeCircle(x * i, y * j, k * 22));
      leftEye.add(two.makeCircle(x * i - 10, y * j, k * 5));
      leftPupil.add(two.makeCircle(x * i - 10, y * j, k * 2));
      rightEye.add(two.makeCircle(x * i + 10, y * j, k * 5));
      rightPupil.add(two.makeCircle(x * i + 10, y * j, k * 2));
      nose.add(two.makePolygon(x * i, y * j + 7, k * 2));
      mouth.add(two.makeCurve(x * i - 10, y * j + 10,
        x * i - 5, y * j + 15,
        x * i, y * j + 14,
        x * i + 5, y * j + 15,
        x * i + 10, y * j + 10,
        true));
      leftEyebrow.add(two.makeCurve(x * i - 15, y * j - 8,
        x * i - 10, y * j - 10,
        x * i - 5, y * j - 8, true));
      rightEyebrow.add(two.makeCurve(x * i + 15, y * j - 8,
        x * i + 10, y * j - 10,
        x * i + 5, y * j - 8, true));
      cheeks.add(two.makeCircle(x * i - 14, y * j + 8, 5));
      cheeks.add(two.makeCircle(x * i + 14, y * j + 8, 5));
      decoration.add(two.makeCircle(x * i + 25, y * j + 25, 3));
      decorationShadow.add(two.makeCircle(x * i + 25 + 3, y * j + 25, 3));


    }
  }
}


leftPupil.fill = 'black';
rightPupil.fill = 'black';

let frank = two.makeGroup(head, cheeks, leftEye, leftPupil, rightEye, rightPupil, nose, mouth, leftEyebrow, rightEyebrow, decoration);
frank.linewidth = 2;
cheeks.fill = '#d98695';
cheeks.stroke = 'none';
cheeks.opacity = .6;
shadow.fill = 'brown'; 
shadow.opacity = .5;
shadow.stroke = 'none';
decoration.fill = '#62B1F6';
decorationShadow.fill = 'darkred';
decorationShadow.stroke = 'none';
decorationShadow.opacity = .5;

}


function bismuth(){
  elem.style.backgroundColor = 'white';
x = 50;
y = 50;
let iVal = 20; 
let jVal = 20;
let kVal = 40;

let shapes = two.makeGroup();
let shapes2 = two.makeGroup();

for (i = 0; i < iVal; i++) {
  for (j = 0; j < jVal; j++) {
    for (k = kVal; k > 0; k--) {
        shapes.add(two.makeRectangle(x * i, y * j, k^3/4 * j * 5, k^2/3 * j));
        shapes2.add(two.makeRectangle(x * i, y * j + 2, k^3/4 * j * 5, k^2/3 * j));
        
    }

  }
}


shapes.linewidth = 1;
shapes2.linewidth = 4;
shapes2.opacity = .3;

}

function toyshop(){
  elem.style.backgroundColor = 'black';
  x = 50;
y = 50;
let iVal = 20; 
let jVal = 20;
let kVal = 4;

let shapes = two.makeGroup();
let shapes2 = two.makeGroup();
let shapes3 = two.makeGroup();
let shapes4 = two.makeGroup();

for (i = 0; i < iVal; i++) {
  for (j = 0; j < jVal; j++) {
    for (k = kVal; k > 0; k--) {
        shapes.add(two.makeStar(x * i, y * j, k * k, k * k));   
        shapes2.add(two.makeCircle(x * i + 25, y * j + 25, k * k/2, k * k));  
        shapes3.add(two.makeRectangle(x * i, y * j, 40, 40));   
        shapes4.add(two.makeCircle(x * i, y * j, 5));   


              
    }

  }
}

shapes.fill = 'yellow';
shapes2.fill = 'red';
shapes3.fill = 'blue';
shapes4.fill = 'black';

shapes.linewidth = 2; 
shapes2.linewidth = 2;
shapes3.linewidth = 2; 
shapes4.linewidth = 2;

shapes.stroke = 'pink';
shapes2.stroke = 'green';
shapes3.stroke = 'purple';
shapes4.stroke = 'magenta';



two.makeGroup(shapes3, shapes2, shapes, shapes4);
}

faces();


facesTrigger.addEventListener('click', function(){
  two.clear();
  elem.style.transform = 'scaleY(1)';
  faces();
})

ladybugsTrigger.addEventListener('click', function(){
  two.clear();
  elem.style.transform = 'scaleY(-1)';
  ladybugs();
})

bismuthTrigger.addEventListener('click', function(){
  two.clear();
  elem.style.transform = 'scaleY(1)';
  bismuth();
})

toyshopTrigger.addEventListener('click', function(){
  two.clear();
  elem.style.transform = 'scaleY(1)';
  toyshop();
})

two.bind('update', function(frameCount) {
    
  }).play();  // Finally, start the animation loop

two.update();


