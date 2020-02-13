class Game {
  constructor() {

    let canvas = document.getElementById('rongWayWralph')
    let screen = canvas.getContext('2d')
    let gameSize = { x: canvas.width, y: canvas.height }
    this.bodies = []
    this.bodies = this.bodies.concat(createCars(this))
    this.bodies = this.bodies.concat(new Player(this, gameSize))
    let tick = () => {
      this.update()
      this.draw(screen, gamesize)
      requestAnimationFrame(tick)
    }
    tick()
  }
  update() {
    let notCollidingWithAnything = (b1) => {
      return this.bodies.filter(function (b2) { return colliding(b1, b2) }).length === 0
    }
    this.bodies = this.bodies.filter(notCollidingWithAnything)
    for (let i = 0; i < this.bodies.length; i++) {
      this.bodies[i].update()
    }
  }

  draw(screen, gameSize) {
    screen.clearRect(0, 0, gameSize.x, gameSize.y)

    for (let i = 0; i < this.bodies.length; i++) {
      drawRect(screen, this.bodies[i])
    }
  }



}

class Wralph {
  constructor(game, center) {
    this.game = game
    this.center = center
    this.size = { x: 30, y: 40 }
    this.color = 'red'
    this.keyboarder = this.keyboarder
  }
    this moveY = 0
this speedY = 1
  }
update() {
  this.center.y += this.speedY
  this.move.y += this.speedY
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

window.addEventListener('load', function () {
  new Game()
})

window.addEventListener('load', function () {
  new Game()
})

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Other functions
// ---------------

// **drawRect()** draws passed body as a rectangle to `screen`, the drawing context.
// function drawRect(screen, body) {
//   screen.fillRect(body.center.x - body.size.x / 2, body.center.y - body.size.y / 2,
//     body.size.x, body.size.y)
// }

// **colliding()** returns true if two passed bodies are colliding.
// The approach is to test for five situations.  If any are true,
// the bodies are definitely not colliding.  If none of them
// are true, the bodies are colliding.
// 1. b1 is the same body as b2.
// 2. Right of `b1` is to the left of the left of `b2`.
// 3. Bottom of `b1` is above the top of `b2`.
// 4. Left of `b1` is to the right of the right of `b2`.
// 5. Top of `b1` is below the bottom of `b2`.
// function colliding(b1, b2) {
//   return !(
//     b1 === b2 ||
//     b1.center.x + b1.size.x / 2 < b2.center.x - b2.size.x / 2 ||
//     b1.center.y + b1.size.y / 2 < b2.center.y - b2.size.y / 2 ||
//     b1.center.x - b1.size.x / 2 > b2.center.x + b2.size.x / 2 ||
//     b1.center.y - b1.size.y / 2 > b2.center.y + b2.size.y / 2
//   )
// }

// Start game
// ----------

// When the DOM is ready, create (and start) the game.
window.addEventListener('load', function () {
  new Game()
})