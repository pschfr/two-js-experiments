var elem = document.getElementById('draw-pattern');
var params = {
  width: 500,
  height: 500
};
var two = new Two(params).appendTo(elem);
elem.style.backgroundColor = 'yellowgreen';

let backgroundPattern = two.makeGroup();

let head = two.makeCurve(
  250, 50, // 0 

  50, 100, // 1

  100, 300, // 2

  180, 430, // 3

  250, 450, // 4

  320, 430, // 5

  400, 300, // 6

  450, 100, // 7

  250, 50, // 8

  true
);

let leftEye = two.makeCurve(
 
  250 - 130, 200, // 0 

  250 - 100, 220, // 1

  250 - 30, 200, // 2

);


let rightEye = two.makeCurve(
  250 + 130, 200, // 0 

  250 + 100, 220, // 1

  250 + 30, 200, // 2


  false
);

let leftPupil = two.makeGroup();

for (i = 5; i > 0; i--){
  leftPupil.add(two.makeCircle(170, 200, i * i/1.2));
}

let rightPupil = two.makeGroup();
for (i = 5; i > 0; i--){
  rightPupil.add(two.makeCircle(330, 200, i * i/1.2));
}

let cheekRadius = 40;

let leftCheek = two.makeCircle(
  250 - 95, 300, 40
)

let rightCheek = two.makeCircle(
  250 + 95, 300, 40
)




let nose = two.makeCurve(
  250 - 20, 260, // 0
  
  250 - 40, 300, // 1

  250, 330, // 2

  250 + 40, 300, // 3

  250 + 20, 260, // 4

  true
);

let mouth = two.makeCurve(
  250 - 50, 355, // 0
  250 - 25, 370, // 1
  250, 375, // 2
  250 + 25, 370, // 3
  250 + 50, 355, // 4
  true
);

let leftEyebrow = two.makeCurve(
  170 - 60, 150, // 0 
  170 - 25, 140, // 1
  170, 138, // 2
  170 + 25, 140, // 3
  170 + 60, 150, // 4
  true
)

let rightEyebrow = two.makeCurve(
  330 - 60, 150, // 0 
  330 - 25, 140, // 1
  330, 138, // 2
  330 + 25, 140, // 3
  330 + 60, 150, // 4
  true
)


leftCheek.fill = 'pink';
rightCheek.fill = 'pink';


let face = two.makeGroup(head, leftCheek, rightCheek, leftEye, rightEye, leftPupil, rightPupil, leftEyebrow, rightEyebrow, mouth, nose);
face.linewidth = 3;
leftEyebrow.linewidth = 20;
rightEyebrow.linewidth = 20;

face.fill = 'none';
head.fill = 'white';
nose.fill = 'white';

two.bind('update', function(frameCount) {
}).play();  


two.update();