var elem = document.getElementById('draw-pattern');
var params = {
  width: 500,
  height: 500
};

elem.style.background = 'black';

var two = new Two(params).appendTo(elem);

x = 50;
y = 50;
let iVal = 20; 
let jVal = 20;
let kVal = 4;

let shapes = two.makeGroup();
let shapes2 = two.makeGroup();
let shapes3 = two.makeGroup();
let shapes4 = two.makeGroup();

for (i = 0; i < iVal; i++) {
  for (j = 0; j < jVal; j++) {
    for (k = kVal; k > 0; k--) {
        shapes.add(two.makeStar(x * i, y * j, k * k, k * k));   
        shapes2.add(two.makeCircle(x * i + 25, y * j + 25, k * k/2, k * k));  
        shapes3.add(two.makeRectangle(x * i, y * j, 40, 40));   
        shapes4.add(two.makeCircle(x * i, y * j, 5));   


              
    }

  }
}

shapes.fill = 'yellow';
shapes2.fill = 'red';
shapes3.fill = 'blue';
shapes4.fill = 'black';

shapes.linewidth = 2; 
shapes2.linewidth = 2;
shapes3.linewidth = 2; 
shapes4.linewidth = 2;

shapes.stroke = 'pink';
shapes2.stroke = 'green';
shapes3.stroke = 'purple';
shapes4.stroke = 'magenta';



two.makeGroup(shapes3, shapes2, shapes, shapes4);

two.update();