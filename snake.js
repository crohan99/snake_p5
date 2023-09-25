class Snake {
  constructor() {
    this.size = 10;
    this.x = width / 2;
    this.y = height / 2;
    this.baseVelocity = this.size / 5;
    this.xSpeed = 0;
    this.ySpeed = 0;
  }

  drawSnake() {
    fill("#4CAF50");
    square(this.x, this.y, this.size);
  }

  moveSnake() {
    this.x = (((this.x % width) + width) % width) + this.xSpeed;
    this.y = (((this.y % height) + height) % height) + this.ySpeed;
    console.log(`(${this.x},${this.y})`);
  }
}
