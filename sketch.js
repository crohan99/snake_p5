var snake;

function setup() {
  createCanvas(1000, 1000);
  snake = new Snake();
}

function draw() {
  background(150);
  snake.drawSnake();
  snake.moveSnake();
}

function keyPressed() {
  let velocity = snake.baseVelocity;
  snake.ySpeed = 0;
  snake.xSpeed = 0;

  switch (keyCode) {
    case UP_ARROW:
      snake.ySpeed = -1 * velocity;
      break;
    case DOWN_ARROW:
      snake.ySpeed = velocity;
      break;
    case LEFT_ARROW:
      snake.xSpeed = -1 * velocity;
      break;
    case RIGHT_ARROW:
      snake.xSpeed = velocity;
      break;
    default:
      break;
  }
}
