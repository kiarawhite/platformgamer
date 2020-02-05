let hero = new Hero()
let shapes = []
ERASE()
  hero.draw()

// setup a function to run whenever a key is pressed
window.addEventListener("keydown", event => {
  console.log(event.code)
  if (event.code=== 'KeyS'){


    // Math.random() gives us a random number between 0 and 1
    let colorIndex = Math.random()
    let color = "red"
    if (colorIndex < 0.3) {
      color = "magenta"
    }
    if (colorIndex > 0.6) {
      color = "red"
    }
    CTX.fillStyle = color

    // we can multiply Math.random() by X to get a number between 0 and X
    let x = Math.random() * CANVAS.width
    let y = Math.random() * CANVAS.height
    let width = Math.random() * CANVAS.width
    let height = Math.random() * CANVAS.height


    // create a new shape with the random attributes and draw it
    let s = new Shape(x, y, width, height)
    shapes.push(s)
}
  if (event.code === "ArrowRight"){
    hero.moveRight()
  }

  ERASE()

 shapes.forEach(s=> s.draw())

  hero.draw()
})










