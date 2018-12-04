var elem = document.getElementById('draw-pattern');
var params = {
  width: 300,
  height: 300
};
var two = new Two(params).appendTo(elem);
elem.style.backgroundColor = 'red';

x = 25;
y = 26;

let mainPattern = two.makeGroup();
let mainPattern2 = two.makeGroup();
let backgroundPattern = two.makeGroup();
let decoration = two.makeGroup();

for (i = 0; i < 20; i++) {

  for (j = 0; j < 15; j++) {
    for (k = 3; k > 0; k--) {
      decoration.add(two.makeCircle(x * i, y * j, k * k));
      mainPattern.add(two.makeCircle(x * i, y * j, k * Math.PI));
      mainPattern2.add(two.makeRectangle(x * i, y * j, 20, 20));
      backgroundPattern.add(two.makeRectangle(x * i + 25 / 2, y * j + 25 / 2, 5, 5));
    }
  }
}

mainPattern2.fill = 'none';
mainPattern2.stroke = 'blue';
mainPattern.fill = 'yellow';
mainPattern.stroke = 'olive';
mainPattern2.linewidth = '2';
backgroundPattern.stroke = 'darkgreen';
backgroundPattern.fill = 'pink';
decoration.fill = 'none';

two.update();