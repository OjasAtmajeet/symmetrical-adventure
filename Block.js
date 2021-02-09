class support {
    constructor(x, y) {
        var options = {
            'isStatic': true,
            'restitution': 0.5,
            'friction': 0.3,
            'density': 1.0
        }
        this.body = Bodies.rectangle(x, y, 1250, 15, options);
        this.angle = 0;
        
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill("white");
        rect(0, 0, 1250, 15);
        pop();
    }
};
