class Snake {
  constructor() {
    this.size = 10;
    this.x = width / 2;
    this.y = height / 2;
    this.xSpeed = this.size / 5;
    this.ySpeed = this.size / 5;
  }

  drawSnake() {
    fill("#4CAF50");
    square(this.x, this.y, this.size);
  }

  moveSnake() {
    this.x = (this.x % width) + this.xSpeed;
    this.y = (this.y % height) + this.ySpeed;
  }
}
