var elem = document.getElementById('draw-flower');
var params = { width: 500, height: 500 };
var two = new Two(params).appendTo(elem);

let head = two.makeCircle(250, 250, 80);
let leftEye = two.makeCircle(250 - 50, 250, 5);
let rightEye = two.makeCircle(250 + 50, 250, 5);
let nose = two.makePolygon(250, 270, 5);
let mouth = two.makeCurve(250 - 20, 300, 250, 310, 250 + 20, 300, true);

let hair = two.makeGroup();

for(k = 0; k < 13; k++){
    hair.add(two.makeCurve(250 + k*10, 230, 250, 110+k/10, true));
    hair.add(two.makeCurve(250 - k*10, 230, 250, 110+k/10, true));
}







let doll = two.makeGroup(head, leftEye, rightEye, nose, mouth, hair);
doll.linewidth = '4';

two.bind('update', function(frameCount) {
   
  }).play();

two.update();