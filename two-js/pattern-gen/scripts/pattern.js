var elem = document.getElementById('draw-pattern');
var params = {
  width: 500,
  height: 500
};
var two = new Two(params).appendTo(elem);
elem.style.backgroundColor = 'black';

x = 50;
y = 50;

let circles = two.makeGroup();
let circles2 = two.makeGroup();
let squares = two.makeGroup();
let circles0 = two.makeGroup();
let lines = two.makeGroup();
let lines2 = two.makeGroup();
let triangles = two.makeGroup();



for (i = 0; i < 20; i++) {
  for (j = 0; j < 20; j++) {
    for (k = 10; k > 0; k--) {
      // circles.add(two.makeCircle(x * i, y * j, k * j));
      squares.add(two.makeRectangle(x * i, y * j, k * j + i * k, k * j + i * k));
      // circles0.add(two.makeCircle(x * i + 25, y * j, k * 2));
      // lines.add(two.makeLine(x * i - 10, y * j - 20, x * i + 10, y * j - 20));
      // lines2.add(two.makeLine(x * i - 15, y * j + 20, x * i + 15, y * j + 20));
      // triangles.add(two.makePolygon(x * i + 25, y * j + 25, 5, 4));
    }

  }
}

squares.stroke = 'white';
squares.linewidth = .8;
squares.opacity = .5;
squares.fill = 'none';
circles.fill = '#fff1e0';
circles.stroke = 'darkblue';
circles.linewidth = .2;
lines.stroke = 'yellow';
lines2.stroke = 'green';
circles0.fill = 'blue';
triangles.fill = 'white';
lines.linewidth = 2;
lines2.linewidth = 3;
triangles.fill = 'green';
triangles.opacity = .3;







two.update();