let canvas = document.getElementById("canvas-1")
let ctx = canvas.getContext("2d")

canvas.width = 640
canvas.height = 480


let size = 10
let cols = Math.floor(canvas.width/size)
let rows = Math.floor(canvas.height/size)

grid = []

for (let col = 0; col < cols; col++) {
    grid[col] = []
    for (let row = 0; row < rows; row++) {
        grid[col][row] = "darkblue"
    }
}


function squareShape(x=0, y=0, color="cyan") {
    grid[x][y] = color
    grid[cols-1-x][y] = color
    grid[x][rows-1-y] = color
    grid[cols-1-x][rows-1-y] = color
}


function triangleShape(x=0, y=0, color="cyan") {
    grid[x][y] = color
    grid[cols-1-x][y] = color
    grid[cols-1-x][rows-1-y] = color
}


function ranMove() {
    let rndmNum = Math.floor(Math.random()*10)
    let x = 0
    let y = 0
    
    if (rndmNum%2 == 0) {
        x = 1
    } else if (rndmNum%2 == 1) {
        x = -1
    }

    if (rndmNum > 5) {
        y = 1
    } else if (rndmNum < 5) {
        y = -1
    }

    return [x, y]
}


// random-x and random-y position
let rx = Math.floor(Math.random()*cols)
let ry = Math.floor(Math.random()*rows)

// Speed
let dx = 1
let dy = 1

// Change color
let hue = Math.floor(Math.random()*360)
let color;

function animate() {
    ctx.clearRect(0,0, canvas.width, canvas.height)

    // Change color
    color = `hsl(${hue}, 50%, 50%)`
    hue += 2 % 360
    
    dx = ranMove()[0]
    dy = ranMove()[1]

    // Set boundaries
    if (rx+dx < 0 || rx+dx  > cols-1) {
        dx = 0
    }
    if (ry+dy < 0 || rx+dy > rows-1) {
        dy = 0
    }

    rx += dx
    ry += dy
    
    squareShape(rx, ry, color)


    // Updates the drawing
    for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows; row++) {
            ctx.fillStyle = grid[col][row]
            ctx.fillRect(col*size, row*size, size, size)
        }
    }

    
    requestAnimationFrame(animate)
}


animate()


function mousePos(e) {
    mx = Math.floor(e.x/size)
    my = Math.floor(e.y/size)
    

}

// canvas.addEventListener("mousemove", mousePos)

















