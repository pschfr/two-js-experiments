var elem = document.getElementById('draw-pattern');
var params = {
  width: 500,
  height: 500
};
elem.style.backgroundColor = '#e97451';
var two = new Two(params).appendTo(elem);

x = 50;
y = 50;
let iVal = 20; 
let jVal = 20;
let kVal = 30;

let shapes = two.makeGroup();
let shapes2 = two.makeGroup();
for (i = 0; i < iVal; i++) {
  for (j = 3; j < jVal; j++) {
    for (k = kVal; k > 1; k--) {
        shapes.add(two.makeCircle(x * i, y * j, (k * j)/2));
        shapes2.add(two.makeCircle(x * i, y * j + 2, (k * j)/2));
        
    }

  }
}

let frame = two.makeRectangle(250, 250, 480, 480);
frame.fill = 'none';
frame.stroke = '#3c1414';
frame.linewidth = 2;

shapes2.opacity = .3;
shapes2.linewidth = 3;
shapes.stroke = 'blue';
shapes2.stroke = 'darkblue';


two.update();