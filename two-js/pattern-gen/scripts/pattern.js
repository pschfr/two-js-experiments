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
let kVal = 10;

let shapes = two.makeGroup();
let shapes2 = two.makeGroup();

for (i = 0; i < iVal; i++) {
  for (j = 0; j < jVal; j++) {
    for (k = kVal; k > 0; k--) {
        shapes.add(two.makeCircle(x * i, y * j, Math.PI));
        
    }

  }
}

shapes2.stroke = 'lightblue';
two.update();