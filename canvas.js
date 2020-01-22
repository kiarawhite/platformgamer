let canvas = document.getElementById("display")

console.log(canvas)

canvas.width = document.body.clientWidth
canvas.height = document.body.clientHeight
let ctx = canvas.getContext("2d")

ctx.fillStyle = "hotpink"
ctx.fillRect(0, 0, canvas.width, canvas.height)

ctx.fillStyle = "red"
ctx.fillRect(0,0, 400, 100)