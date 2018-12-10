var elem = document.getElementById('draw-pattern');
var params = {
    width: 500,
    height: 500
};



elem.style.backgroundColor = 'skyblue';

var two = new Two(params).appendTo(elem);

x = 50;
y = 50;
let iVal = 10;
let jVal = 10;
let kVal = 10;

let ladybug = two.makeGroup();
let wings = two.makeGroup();
let head = two.makeGroup();
let antennae = two.makeGroup();
let spots = two.makeGroup();

for (i = 1; i < iVal; i++) {
    for (j = 1; j < jVal; j++) {
        for (k = kVal; k > 0; k--) {
            ladybug.add(two.makeCircle(x * i, y * j, 10));
            wings.add(two.makeCurve(x * i - 10, y * j - 10,
                x * i, y * j,
                x * i, y * j + 10, false));
            wings.add(two.makeCurve(x * i + 10, y * j - 10,
                x * i, y * j,
                x * i, y * j + 10, false));
            head.add(two.makeCircle(x * i, y * j + 8, 6));
            antennae.add(two.makeCurve(x * i - 2, y * j + 12, x * i - 2, y * j + 18, x * i - 5, y * j + 21, true));
            antennae.add(two.makeCurve(x * i + 2, y * j + 12, x * i + 2, y * j + 18, x * i + 5, y * j + 21, true));
            spots.add(two.makeCircle(x * i, y * j + 3, 3));
            spots.add(two.makeCircle(x * i - 8, y * j - 3, 2));
            spots.add(two.makeCircle(x * i + 8, y * j - 3, 2));
            spots.add(two.makeCircle(x * i - 6, y * j + 4, 1));
            spots.add(two.makeCircle(x * i + 6, y * j + 4, 1));
        }

    }
}

let wholeLadybug = two.makeGroup(ladybug, head, wings, antennae, spots);


ladybug.fill = 'black';
head.fill = 'black';
wings.fill = 'red';
wings.stroke = 'darkred';
wings.linewidth = .5;
spots.fill = 'black';
antennae.fill = 'none';


two.bind('update', function(frameCount) {
    
  }).play();  // Finally, start the animation loop

two.update();