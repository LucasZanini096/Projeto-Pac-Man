const canvas = document.getElementById("canvas");
const canvasContext = canvas.getContext("2d")

const pacmanFrames = document.getElementById("animation")
const ghostFrames = document.getElementById("ghosts")

let createReact = (a,y,widht, height, color) => {
    canvasContext.fillSytle = color;
    canvasContext.fillRect(x,y,widht,height)

}

let fps = 30;
let oneBlockSize =20
let wallColor = "#342DCA"
let wallSpaceWidht = oneBlockSize / 1.5
let wallOffset = (oneBlockSize - wallSpaceWidht) / 2
let wallInnerColor = "black"


const DIRECTION_RIGHT = 4
const DIRECTION_UP = 3
const DIRECTION_LEFT = 2
const DIRECTION_BOTTOM = 1

let map = [
    [1,1,1,1,1 ,1,1,1,1,1 , 1,1,1,1,1, 1,1,1,1,1, 1],
    [1,2,2,2,2 ,2,2,2,2,2 , 1,2,2,2,2, 2,2,2,2,2, 1],
    [1,2,1,1,1 ,2,1,1,1,2 , 1,2,1,1,1, 2,1,1,1,2, 1],
    [1,2,1,1,1 ,2,1,1,1,2 , 1,2,1,1,1, 2,1,1,1,2, 1],
    [1,2,2,2,2 ,2,2,2,2,2 , 2,2,2,2,2, 2,2,2,2,2, 1],
    [1,2,1,1,1 ,2,1,2,1,1 , 1,2,2,2,1, 2,2,2,2,2, 1],
    [1,2,2,2,2 ,2,1,1,1,2 , 1,2,1,1,1, 2,1,1,1,1, 1],
    [0,0,0,0,1 ,2,1,2,2,2 , 2,2,2,2,1, 2,1,0,0,0, 1],
    [1,1,1,1,1 ,2,1,2,1,1 , 2,1,1,2,1, 2,1,1,1,1, 1],
    [2,2,2,2,2 ,2,2,2,1,2 , 2,2,1,2,2, 2,2,2,2,2, 1],
    [1,1,1,1,1 ,2,1,2,1,2 , 2,2,1,2,1, 2,1,1,1,1, 1],
    [0,0,0,0,1 ,2,1,2,1,1 , 1,1,1,2,1, 2,1,0,0,0, 1],
    [0,0,0,0,1 ,2,1,2,2,2 , 2,2,2,2,1, 2,1,0,0,0, 1],
    [1,1,1,1,1 ,2,2,2,1,1 , 1,1,1,2,2, 2,1,1,1,1, 1],
    [1,2,2,2,2 ,2,2,2,2,2 , 1,2,2,2,2, 2,2,2,2,2, 1],
    [1,2,1,1,1 ,2,1,1,1,2 , 1,2,1,1,1, 2,1,1,1,2, 1],
    [1,2,2,2,1 ,2,2,2,2,2 , 2,2,2,2,2, 2,1,2,2,2, 1],
    [1,1,2,2,1 ,2,1,2,1,1 , 1,1,1,2,1, 2,1,2,2,1, 1],
    [1,2,2,2,2 ,2,1,2,2,2 , 1,2,2,2,1, 2,2,2,2,2, 1],
    [1,2,1,1,1 ,1,1,1,1,2 , 1,2,1,1,1, 1,1,1,1,2, 1],
    [1,2,2,2,2 ,2,2,2,2,2 , 2,2,2,2,2, 2,2,2,2,2, 1],
    [1,1,1,1,1 ,1,1,1,1,1 , 1,1,1,1,1, 1,1,1,1,1, 1],

];


let gameLoop = () => {
    update()
    draw()
}

let update = () => {
    //
};

let draw = () => {
    createReact(0,0, canvas.widht, canvas.height, "black")
    drawWalls();
};


let gameInterval = setInterval(gameLoop, 1000/ fps)

let drawWalls = () => {
    for(let i = 0 ; i < map.length; i ++) {
        for(let j =0; j < map[0].length; j++) {
            if(map[i][j] == 1) {
                createReact(j * oneBlockSize, i * oneBlockSize, oneBlockSize, oneBlockSize, wallColor)
            }
            if(j > 0 && map[i][j] == 1) {
                createReact(j * oneBlockSize, i *oneBlockSize + wallOffset,
                    wallSpaceWidht + wallOffset,
                    wallSpaceWidht, wallInnerColor
                    )
            }
            if(j < map[0].length && map[i][j + 1] == 1) {
                createReact(j * oneBlockSize + wallOffset
                    , i *oneBlockSize + wallOffset,
                    wallSpaceWidht + wallOffset,
                    wallSpaceWidht, wallInnerColor
                    )
            }

            if(i > 0 && map[i-1][j] == 1) {
                createReact(j * oneBlockSize + wallOffset, i *oneBlockSize,
                    wallSpaceWidht,
                    wallSpaceWidht + wallOffset, wallInnerColor
                    )
            }
            if (i < map.length - 1 && map[i + 1][j] == 1) {
                createReact(j * oneBlockSize + wallOffset, i *oneBlockSize +  wallOffset,
                    wallSpaceWidht,
                    wallSpaceWidht + wallOffset, wallInnerColor
                    )
            }
        }
    }
}