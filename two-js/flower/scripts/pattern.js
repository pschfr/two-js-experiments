var elem = document.getElementById('draw-pattern');
var params = {
  width: 300,
  height: 300
};
var two = new Two(params).appendTo(elem);
elem.style.backgroundColor = 'pink';

x = 25;
y = 25;

let mainPattern = two.makeGroup();
let mainPattern2 = two.makeGroup();
let mainPattern3 = two.makeGroup();
let backgroundPattern = two.makeGroup();
let decoration = two.makeGroup();

for (i = 0; i < 15; i++) {

  for (j = 0; j < 15; j++) {
    for (k = 3; k > 0; k--) {
      decoration.add(two.makeCircle(x * i, y * j, k * k));
      mainPattern.add(two.makeCircle(x * i, y * j, 10));
      mainPattern2.add(two.makeCircle(x * i + 2, y * j, 10));
      mainPattern3.add(two.makeCircle(x * i + 4, y * j, 10));
      //backgroundPattern.add(two.makePolygon(x * i + 25 / 2, y * j + 25 / 2, 15));
    }
  }
}

mainPattern.fill = 'yellow';
mainPattern.stroke = 'none';
mainPattern2.fill='red';
mainPattern2.opacity = '.5';
mainPattern2.stroke = 'none';
mainPattern3.opacity = '.3';
mainPattern3.stroke = 'none';
mainPattern3.fill = 'white';
decoration.stroke = 'red';


two.update();