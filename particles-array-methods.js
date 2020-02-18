let particles = [];

let winWidth = document.body.clientWidth;
let winHeight = document.body.clientHeight;

// TODO add resize function

function setup() {
  createCanvas(winWidth, winHeight);
}

function draw() {
  background(0);
  let p = new Particle();
  particles.push(p);

  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
    if (particles[i].delete()) {
      particles.splice(i, 1);
    }
  }
}

class Particle {
  constructor() {
    this.x = winWidth / 2;
    this.y = winHeight;
    this.vx = random(-1, 2);
    this.vy = random(-5, -1);
    this.alpha = 200;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 2;
  }
  show() {
    // stroke(120);
    noStroke();
    fill(240, this.alpha);
    ellipse(this.x, this.y, 80);
  }

  delete() {
    return this.alpha < 0;
  }
}
