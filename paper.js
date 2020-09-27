class Paper {

    constructor(x, y, radius){
        var options = {
            isStatic : false,
            restituion : 2,
            friction : 0.5,
            density : 1.2
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
        ellipseMode(RADIUS);
        fill("yellow");
        ellipse(pos.x, pos.y, this.radius);
    }
};