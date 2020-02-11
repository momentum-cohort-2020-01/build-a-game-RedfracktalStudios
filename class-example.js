class Game {
  constructor() {

    //this.canvas //draw a canvas
    this.score = 0
    this.player = new Player()
    this.car = new Car()
  }
}
class Player {
  constructor() {
    this.position = { x: 0, y: 0 }
  }
  moveRight() {
    this.position.x++
  }
}
//

class Car {
  constructor() {
    this.position = { x: 0, y: 0 }
    this.color = 'red'
    // this.green = { x: 0, y: 0 }
    // this.red = { x: 0, y: 0 }
  }
}


var Wralph = function (game, center) {
  this.game = game;
  this.center = center;
  this.size = { x: 15, y: 15 };

  // Invaders patrol from left to right and back again. this.patrolX records the current (relative) position of the invader in their patrol. It starts at 0, increases to 40, then decreases to 0, and so forth.
  this.patrolX = 0;

  // The x speed of the invader. A positive value moves the invader right. A negative value moves it left.

  this.speedX = 0.3;
};

