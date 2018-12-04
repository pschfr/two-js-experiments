var elem = document.getElementById('draw-pattern');
var params = {
  width: 300,
  height: 300
};
var two = new Two(params).appendTo(elem);
elem.style.backgroundColor = 'green';

x = 25;
y = 25;

let mainPattern = two.makeGroup();
let decoration = two.makeGroup();

for (i = 0; i < 15; i++) {

  for (j = 0; j < 15; j++) {
    for (k = 4; k > 0; k--) {
      decoration.add(two.makeCircle(x * i, y * j, k * k));
    }
  }
}




two.update();