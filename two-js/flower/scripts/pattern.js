var elem = document.getElementById('draw-pattern');
var params = {
  width: 300,
  height: 300
};
var two = new Two(params).appendTo(elem);
elem.style.backgroundColor = '#fd6a02';

x = 25;
y = 25;

let mainPattern = two.makeGroup();
let mainPattern2 = two.makeGroup();
let backgroundPattern = two.makeGroup();
let decoration = two.makeGroup();

for (i = 0; i < 15; i++) {

  for (j = 0; j < 15; j++) {
    for (k = 15; k > 0; k--) {
      // decoration.add(two.makeCircle(x * i, y * j, j));
      mainPattern.add(two.makeCircle(x * i, y * j, k * j/Math.PI));
      // mainPattern2.add(two.makeStar(x * i, y * j, 20, 20));
      // backgroundPattern.add(two.makeRectangle(x * i + 25 / 2, y * j + 25 / 2, 5, 5));
    }
  }
}

mainPattern2.fill = 'none';
mainPattern2.stroke = 'orange';
mainPattern.fill = 'white';
mainPattern.stroke = 'blue';
mainPattern2.linewidth = '2';
backgroundPattern.stroke = 'darkgreen';
backgroundPattern.fill = 'pink';
decoration.fill = 'none';

two.update();