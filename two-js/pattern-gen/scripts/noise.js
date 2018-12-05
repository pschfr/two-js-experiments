// CODE FOR GENERIC NOISE MUSIC ALBUM COVER 

var elem = document.getElementById('draw-pattern');
var params = {
  width: 500,
  height: 500
};


var two = new Two(params).appendTo(elem);

x = 50;
y = 50;
let iVal = 10; 
let jVal = 8;
let kVal = 22;

let circles = two.makeGroup();
let squares = two.makeGroup();



for (i = 1; i < iVal; i++) {
  for (j = 1; j < jVal; j++) {
    for (k = kVal; k > 0; k--) {
      circles.add(two.makeCircle(x * i, y * j, k^2/3 * j));
      squares.add(two.makeRectangle(x * i, y * j, 30, 30));
    }

  }
}

squares.fill = 'none';
squares.linewidth = 2;

// let groupAll = two.makeGroup(squares, circles);


let frame = two.makeGroup(
  (two.makeRectangle(250, 250, 500, 500)),
  (two.makeRectangle(250, 250, 468, 468))
);

let lines = two.makeGroup()

for (i = 9; i > 0; i--){
    lines.add(two.makeLine(x * i - 10, y * j - 5 , x * i + 10, y * j - 5));
    lines.add(two.makeLine(x * i - 15, y * j + 20, x * i + 15, y * j + 20));
    lines.add(two.makeLine(x * i - 20, y * j + 45, x * i + 20, y * j + 45));
    
  
}

frame.fill = 'none';
frame.linewidth = 20;
frame.children[1].opacity = .8;
frame.children[1].linewidth = 12;
frame.children[1].stroke = 'darkred';

lines.linewidth = 7;

two.update();