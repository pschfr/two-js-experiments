var elem = document.getElementById('draw-pattern');
var params = {
  width: 500,
  height: 500
};

var two = new Two(params).appendTo(elem);

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
two.update();