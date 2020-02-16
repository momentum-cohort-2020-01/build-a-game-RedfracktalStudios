class Game {
  constructor() {
    const canvas = document.querySelector('#canvas');
    const screen = canvas.getContext('2d');
    const gameSize = { x: canvas.width, y: canvas.height }

    this.bodies = []
    this.bodies = this.bodies.concat(new Player(this, gameSize))
    this.bodies = this.bodies.concat(createCars(this))

    this.score = 0

    let tick = () => {
      if (this.bodies.length < 5) {
        this.bodies = this.bodies.concat(createCars(this))
      }
      this.update()
      this.draw(screen, gameSize)
      requestAnimationFrame(tick)
    }
    tick()
  }
  update() {
    this.keepScore()
    let canvas = document.getElementById('canvas')
    this.bodies = this.bodies.filter(this.collision)
    this.bodies = this.bodies.filter(body => body.center.y >= 0 - 50)
    this.bodies = this.bodies.filter(body => body.center.y <= canvas.height + 50)
    for (let i = 0; i < this.bodies.length; i++) {
      this.bodies[i].update()
    }
  }

  collision = (b1) => {
    return this.bodies.filter(function (b2) { return colliding(b1, b2) }).length === 0
  }

  draw(screen, gameSize) {
    screen.clearRect(0, 0, gameSize.x, gameSize.y)
    for (let i = 0; i < this.bodies.length; i++) {
      drawRect(screen, this.bodies[i], '#8D021F')
    }
    this.drawScore(screen, 'white')
  }

  drawScore(screen, color) {
    screen.fillStyle = color
    screen.font = '1rem sans-serif'
    screen.fillText(`Score: ${this.score}`, 10, 15)
  }


  keepScore() {
    for (let body of this.bodies) {
      if (body instanceof Car && !this.collision(body)) {
        this.score += 1
      }
    }
  }

}

class traffic {
  constructor(game, center) {
    this.game = game
    this.center = center
    this.size = { x: 30, y: 40 }
    this.moveY = 1
    this.speedY = 3
  }
  update() {
    this.center.y += this.speedY
    this.moveY += this.speedY
  }
}

function createCars(game) {
  let cars = []
  for (let i = 0; i < 1; i++) {
    let x = Math.random() * 250
    let y = 0
    cars.push(new traffic(game, { x: x, y: y }))
  }
  return cars
}

class Player {
  constructor(game, gameSize) {
    this.game = game
    this.size = { x: 30, y: 40 }
    this.center = { x: gameSize.x / 2, y: gameSize.y - this.size.y * 2 }

    this.keyboarder = Keyboarder
  }

  update() {
    if (this.center.x > 0) {
      if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)) {
        this.center.x -= 2
      }
    }
    if (this.center.x < 300) {
      if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) {
        this.center.x += 2
      }
    }


  }
}


class Car {
  constructor(center, velocity) {
    this.center = center
    this.size = { x: 30, y: 40 }
    this.velocity = velocity
    this.ticks = 0

  }
  update() {
    this.ticks += 1
    if (this.ticks % 2 === 0) {
      this.center.x += this.velocity.x
      this.center.y += this.velocity.y - 10
    }
  }
}

function drawRect(screen, body, color) {
  let position = screen.fillStyle
  screen.fillStyle = color
  screen.fillRect(body.center.x - body.size.x / 2, body.center.y - body.size.y / 2,
    body.size.x, body.size.y)
  screen.fillStyle = position
}

function colliding(b1, b2) {
  return !(
    b1 === b2 ||
    b1.center.x + b1.size.x / 2 < b2.center.x - b2.size.x / 2 ||
    b1.center.y + b1.size.y / 2 < b2.center.y - b2.size.y / 2 ||
    b1.center.x - b1.size.x / 2 > b2.center.x + b2.size.x / 2 ||
    b1.center.y - b1.size.y / 2 > b2.center.y + b2.size.y / 2
  )
}

window.addEventListener('load', function () {
  new Game()
})