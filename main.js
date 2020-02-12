class Game {
  constructor() {
    this.canvas = (width, height)
    this.score = 0
    this.player = new Player()
    this.car = new Car()
  }
}

///////////////////////////////////////
class Wralph {
  constructor() {
    this.position = { x: 0, y: 0 }
  }
  moveRight() {
    this.position = { x: 0, y: 0 }
  }
  moveLeft() {
    this.position = { x: 0, y: 0 }
  }
}

// **new Player()** creates a player.
// class Player {
//   constructor(game, gameSize) {
//     this.game = game
//     this.size = { x: 15, y: 15 }
//     this.center = { x: gameSize.x / 2, y: gameSize.y - this.size.y * 2 }

//     // Create a keyboard object to track button presses.
//     this.keyboarder = new Keyboarder()
//   }

//   // **update()** updates the state of the player for a single tick.
//   update() {
//     // If left cursor key is down...
//     if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)) {
//       // ... move left.
//       this.center.x -= 2
//     } else if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) {
//       this.center.x += 2
//     }
// //////////////////////////////////////


class Car {
  constructor() {
    this.position = { x: 0, y: 0 }
    this.color = 'red'
    // this.green = { x: 0, y: 0 }
    // this.red = { x: 0, y: 0 }
  }
}


var player = function (game, center) {
  this.game = game;
  this.center = center;
  this.size = { x: 15, y: 15 };

  // Invaders patrol from left to right and back again. this.patrolX records the current (relative) position of the invader in their patrol. It starts at 0, increases to 40, then decreases to 0, and so forth.
  this.patrolX = 0;

  // The x speed of the invader. A positive value moves the invader right. A negative value moves it left.

  this.speedX = 0.3;
};

