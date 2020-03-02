
let heroStand = new Sprite("images/heros/yellow/alienYellow_stand.png")
let heroJump = new Sprite("images/heros/yellow/alienYellow_jump.png")

class Hero{
	constructor(){
		this.x = GRIDSIZE	
		this.y = GRIDSIZE
		this.width = GRIDSIZE
		this.height = GRIDSIZE * 2

		this.dy = 0
		this.airborne = true

	}

jump() {
		if (this.airborne) {
			return
		}

	this.dy = - GRIDSIZE / 2.2
	this.airborne = true
}

	moveLeft(){
		this.x = this.x - GRIDSIZE / 10
	}
	moveRight(){
		this.x = this.x + GRIDSIZE / 10
	}
	step() {
		//accelerate falling speed

		this.dy = this.dy + GRIDSIZE / 80

		if (this.dy > GRIDSIZE) {
			this.dy = GRIDSIZE - 1
	}

		//apply speed to position
		this.y = this.y + this.dy
		if (this.y > CANVAS.height) {
			this.y = CANVAS.height
			this.airborne = false
		}
	}

	draw() {
		CTX.fillStyle = "red"
		CTX.beginPath()
		CTX.arc(

			this.x,
			this.y,
			this.width,
			this.width,
			0,
			2* Math.PI,
			)
		CTX.fill()

		let imageToDraw = heroStand
		if (this.airborne) {
			imageToDraw = heroJump
		}
		imageToDraw.draw (
			this.x - this.width / 2,
			this.y - this.height,
			this.width,
			this.height
			)
	}
}