let particles = [];

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    
    // update and display particles
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].display();
    }
}

function mouseClicked() {
    // create a new particle at the mouse position
    let p = new Particle(mouseX, mouseY);
    particles.push(p);
}

class Particle {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector();
        this.acc = createVector();
        this.target = createVector(mouseX, mouseY);
        this.maxSpeed = 2;
        this.maxForce = 0.05;
    }
    
    update() {
        // calculate steering force towards target
        let desired = p5.Vector.sub(this.target, this.pos);
        let d = desired.mag();
        if (d < 100) {
            let m = map(d, 0, 100, 0, this.maxSpeed);
            desired.setMag(m);
        } else {
            desired.setMag(this.maxSpeed);
        }
        let steer = p5.Vector.sub(desired, this.vel);
        steer.limit(this.maxForce);
        this.acc.add(steer);
        
        // update position, velocity, and acceleration
        this.vel.add(this.acc);
        this.vel.limit(this.maxSpeed);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }
    
    display() {
        // draw particle
        noStroke();
        fill(255, 0, 0);
        ellipse(this.pos.x, this.pos.y, 10, 10);
    }
}
