let mic;
let circles = [];

function setup() {
  createCanvas(1080, 1920);
  mic = new p5.AudioIn();
  mic.start();
  
  // Creazione di 50 cerchi random
  for (let i = 0; i < 50; i++) {
    let circle = {
      x: random(width),
      y: random(height),
      size: random(50),
      color: color(random(255), random(255), random(255))
    };
    circles.push(circle);
  }
}

function draw() {
  // Disegno dello sfondo verticale
  background(255); // Imposta lo sfondo a bianco
  for (let i = 0; i < height; i++) {
    stroke(0); // Imposta il colore del tratto a nero
    line(0, i, width, i); // Disegna una riga orizzontale a y=i
  }
  
  // Aggiornamento delle dimensioni dei cerchi in base al rumore del microfono
  let rms = mic.getLevel();
  let circleSize = map(rms, 0, 1, 10, 2000);
  
  // Aggiornamento delle posizioni dei cerchi in modo random
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
    circle.x = random(width);
    circle.y = random(height);
    circle.size = circleSize;
    circle.color = color(random(255), random(255), random(255));
    fill(circle.color);
    ellipse(circle.x, circle.y, circle.size, circle.size);
  }
}
