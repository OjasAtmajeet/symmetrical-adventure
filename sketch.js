const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bg, bgI;
var sh, shI;
var moI1, mo, moI2;
var s1;
function preload() {
    //preload the images here
    bgI = loadImage("GamingBackground.png");
    shI = loadImage("Superhero-01.png");
    moI1 = loadImage("Monster-01.png");
    moI2 = loadImage("Monster-02.png");
}

function setup() {
    createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;
    
    // create sprites here
    var option = {
        'isStatic': false,
        'restitution': 0.1,
        'friction': 1,
        'density': 0.3
    }
    sh = Bodies.rectangle(200, 300, 220, 100, option);
    World.add(world, sh);

    var option1 = {
        'isStatic': false,
        'restitution': 0.1,
        'friction': 1,
        'density': 0.3
    }
    mo = Bodies.circle(800, 100, 80, option1);
    World.add(world, mo);

    bg = createSprite(100, 100, 100, 100);
    bg.addImage(bgI);
    bg.scale = 0.75;

    s1 = new support(250, 450);

    b1 = new brick(375, 350);
    b2 = new brick(375, 300);
    b3 = new brick(375, 250);
    c1 = new brick(375, 200);
    c2 = new brick(375, 150);
    c3 = new brick(375, 100);
    e1 = new brick(475, 350);
    e2 = new brick(475, 300);
    e3 = new brick(475, 250);
    f1 = new brick(475, 200);
    f2 = new brick(475, 150);
    f3 = new brick(475, 100);
    g1 = new brick(575, 350);
    g2 = new brick(575, 300);
    g3 = new brick(575, 250);
    h1 = new brick(575, 200);
    h2 = new brick(575, 150);
    h3 = new brick(575, 100);
    
    
    rope = new Sling(sh, {x: 200, y:100});
}

function draw() {
    background("#87D3F2");
    Engine.update(engine);
    drawSprites();

    imageMode(CENTER);
    image(shI, sh.position.x, sh.position.y, 200, 100);
    if (mo.position.x < 925) {
        image(moI1, mo.position.x, mo.position.y, 200, 200);
    }
    else {
        image(moI2, mo.position.x, mo.position.y, 200, 200);
    }
    s1.display();
    b1.display();
    b2.display();
    b3.display();
    
    c1.display();
    c2.display();
    c3.display();

    e1.display();
    e2.display();
    e3.display();

    f1.display();
    f2.display();
    f3.display();

    g1.display();
    g2.display();
    g3.display();

    h1.display();
    h2.display();
    h3.display();
    
    
}
function mouseDragged() {
    Matter.Body.setPosition(sh, { x: mouseX, y: mouseY });
}