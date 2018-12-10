var elem = document.getElementById('draw-shapes');
var params = { width: 500, height: 500 };
var two = new Two(params).appendTo(elem);

let bloop = two.makeCurve(
    250 - 50, 200, // 0
    250 - 100, 250, // 1
    250, 250 + 100, // 2
    250 + 100, 250, // 3
    250 + 50, 200, // 4
    false
);

let bloop2 = two.makeCurve(
    250 - 10, 340, // 0
    250 - 100, 340, // 1
    250, 310, // 2
    250 + 100, 300, // 3
    250 + 50, 340, // 4
    false
)

let bloop3 = two.makeCurve(
    250 - 50, 200, // 0
    250 - 100, 250, // 1
    250, 250 + 100, // 2
    250 + 100, 250, // 3
    250 + 50, 200, // 4
    false
);

bloop3.linewidth = 0;
bloop3.opacity = 1;
bloop3.fill = 'orange';

bloop.linewidth = 3;
bloop.fill = 'none';
bloop2.translation.x += 2;
bloop2.translation.y -= 2;
bloop2.fill = 'none';
bloop2.opacity = 0;
bloop2.linewidth = 5;

blooper = two.makeGroup();


two.bind('update', function(frameCount) {

    // 0
    if(bloop.vertices[0].x >= bloop2.vertices[0].x){
        bloop.vertices[0].x -= .5;
    }
    else {
        bloop.vertices[0].x += 0;
    }

    
    if(bloop.vertices[0].y <= bloop2.vertices[0].y){
        bloop.vertices[0].y += .5;
    }
    else {
        bloop.vertices[0].y += 0;
    }

    // 1
    if(bloop.vertices[1].x >= bloop2.vertices[1].x){
        bloop.vertices[1].x -= .5;
    }
    else {
        bloop.vertices[1].x += 0;
    }


    if(bloop.vertices[1].y <= bloop2.vertices[1].y){
        bloop.vertices[1].y += .5;
    }
    else {
        bloop.vertices[1].y += 0;
    }

    // 2
    if(bloop.vertices[2].x >= bloop2.vertices[2].x){
        bloop.vertices[2].x -= .5;
    }
    else {
        bloop.vertices[2].x += 0;
    }


    if(bloop.vertices[2].y <= bloop2.vertices[2].y){
        bloop.vertices[2].y += .5;
    }
    else {
        bloop.vertices[2].y += 0;
    }

    // 3
    if(bloop.vertices[3].x >= bloop2.vertices[3].x){
        bloop.vertices[3].x -= .5;
    }
    else {
        bloop.vertices[3].x += 0;
    }


    if(bloop.vertices[3].y <= bloop2.vertices[3].y){
        bloop.vertices[3].y += .5;
    }
    else {
        bloop.vertices[3].y += 0;
    }

    // 4
    if(bloop.vertices[4].x >= bloop2.vertices[4].x){
        bloop.vertices[4].x -= .5;
    }
    else {
        bloop.vertices[4].x += 0;
    }


    if(bloop.vertices[4].y <= bloop2.vertices[4].y){
        bloop.vertices[4].y += .5;
    }
    else {
        bloop.vertices[4].y += 0;
    }

    if(bloop.vertices[1].x <= 50){
        bloop3.vertices[1]. x += .3;
    }
    
    bloop3.translation.x += .3;
    bloop3.translation.y -= .3;


   
}).play();

two.update();