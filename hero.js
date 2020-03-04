
let heroStand = new Sprite("images/alienYellow_stand.png")
let heroJump = new Sprite("images/alienYellow_jump.png")

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

	this.dy = - GRIDSIZE / 1.9
	this.airborne = true
}

	moveLeft(){
		this.x = this.x - GRIDSIZE / 10
	}
	moveRight(){
		this.x = this.x + GRIDSIZE / 10
	}
	step(platforms) {
		//accelerate falling speed

		this.dy = this.dy + GRIDSIZE / 70

		if (this.dy > GRIDSIZE) {
			this.dy = GRIDSIZE - 1
		}

		console.log(this.dy)

		//apply speed to position
		platforms.forEach(p => {
			let isInsideY = this.y > p.y && this.y < p.y + p.height
			let isInsideX = this.x > p.x && this.x < p.x + p.width
			let isFalling = this.dy > 0

			//check if hero can land on platform
			if (isFalling){
				if (isInsideX && isInsideY) {
					this.y = p.y
					this.dy = 0
					this.airborne - false
				}
			}
		})
		//check if hero is on the ground
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