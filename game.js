class Game {

  constructor() {
    // state
    this.hero = new Hero()
    this.platforms = []
    this.keyPressed = {}


    // setup a function to run whenever a key is pressed
    window.addEventListener("keydown", event => {
    this.keyPressed[event.code] = true
    })
      window.addEventListener("keyup", event =>{
      this.keyPressed[event.code] = false
      })
    
    this.platforms.push(new Platform(GRIDSIZE, GRIDSIZE*8, GRIDSIZE *3, GRIDSIZE))
    this.loop()

  }
  

  loop() {

    if (this.keyPressed["ArrowUp"]){
      this.hero.jump()
    }

    if (this.keyPressed["ArrowRight"]){
      this.hero.moveRight()
    }

    if (this.keyPressed["ArrowLeft"]){
      this.hero.moveLeft()
    }

    this.hero.step(this.platforms)
    
    ERASE()
    this.platforms.forEach(p => p.draw())
    this.hero.draw()
    setTimeout(() => this.loop(), 1000/60)
  }
}

new Game()
