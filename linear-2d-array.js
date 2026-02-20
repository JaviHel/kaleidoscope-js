let canvas = document.getElementById("canvas-1")
let ctx = canvas.getContext("2d")

canvas.width = 300
canvas.height = 300


let size = 60
let cols = Math.floor(canvas.width/size)
let rows = Math.floor(canvas.height/size)



grid = []
for (let i = 0; i < cols*rows; i++) {
    grid.push("darkblue")
    let x = i % cols
    let y = Math.floor(i / rows)  
}





function kaleidoTwoDim(x=0, y=0, color="cyan") {
    grid[x][y] = color
    grid[cols-1-x][y] = color
    grid[x][rows-1-y] = color
    grid[cols-1-x][rows-1-y] = color
}

function kaleidoOneDim(index, color="cyan") {
    let idx0 = index
    let idx1 = (cols*rows)-index-1
    // let idx2 = (cols*rows)-(index-1)
    grid[idx0] = "red"
    grid[idx1] = "green"
    // grid[idx2] = "blue"
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

    kaleidoOneDim(dx%(cols*rows))
    dx += 1
    
    for (let i = 0; i < cols*rows; i++) {
        let x = i % cols
        let y = Math.floor(i / rows)
        let index = x + y * cols 
        
        ctx.beginPath()
        ctx.rect(x*size, y*size, size, size)
        ctx.fillStyle = grid[index]
        ctx.fill()
        ctx.stroke()
    }
    
    // requestAnimationFrame(animate)
}


animate()

















