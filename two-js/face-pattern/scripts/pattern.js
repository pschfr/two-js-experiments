var elem = document.getElementById('draw-pattern');
var params = {
  width: 500,
  height: 500
};
var two = new Two(params).appendTo(elem);
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


for (i = 0; i < 15; i++) {
  for (j = 0; j < 15; j++) {
    for (k = 1; k > 0; k--) {
      head.add(two.makeCircle(x * i, y * j, k * 22));
      leftEye.add(two.makeCircle(x * i - 10, y * j, k * 4));
      leftPupil.add(two.makeCircle(x * i - 10, y * j, k * 2));
      rightEye.add(two.makeCircle(x * i + 10, y * j, k * 4));
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
    }
  }
}


leftPupil.fill = 'black';
rightPupil.fill = 'black';



two.update();