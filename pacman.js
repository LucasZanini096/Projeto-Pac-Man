class Pacman {
    constructor(x,y, widht, height, speed) {
        this.x = x
        this.y = y
        this.widht = widht
        this.height = height
        this.speed = speed
        this.direction = DIRECTION_RIGHT
        this.currentFrame = 1
        this.frameCount = 7

        setInterval(() => {
            this.changeAnimation()
        }, 100)

    }
    moveProcess() {
        this.changeDirectionPossible()
        this.moveForwards();
        if (this.checkCollision()) {
            this.moveBackwards();
        }

    }

    eat() {

    }

    moveBackwards() {

        switch(this.direction) {

            case DIRECTION_RIGHT:
             this.x -= this.speed
             break
             case DIRECTION_UP:
             this.y += this.speed
             break
             case DIRECTION_LEFT:
             this.x += this.speed
             break
             case DIRECTION_BOTTOM:
             this.y -= this.speed
             break
         }
    }
    moveForwards() {

        switch(this.direction) {

           case DIRECTION_RIGHT:
            this.x += this.speed
            break
            case DIRECTION_UP:
            this.y -= this.speed
            break
            case DIRECTION_LEFT:
            this.x -= this.speed
            break
            case DIRECTION_BOTTOM:
            this.y += this.speed
            break
        }
    }

    checkCollision() {
        let isCollided = false
        if(
        map[this.getMapY()][this.getMapX()] == 1 || 
        map[this.getMapYRightSide()][this.getMapX] == 1 || 
        map[tjis.getMapY()][this.getMapXRightSide] == 1  ||
        map[this.getMapYRightSide()][this.getMapXRightSide()] == 1
        )     { 
            return true 
        }
        return false
    
    }

    checkGhostColision() {

    }

    changeDirectionPossible() {

    }

    changeAnimation() {
        this.currentFrame = this.currentFrame == this.currentFrame ? 1 : this.currentFrame + 1;
    }
    draw() {

    }

    getMapX() {
        return parseInt(this.x/ oneBlockSize)
    }

    getMapY() {
        return parseInt(this.y/ oneBlockSize)
    }
    getMapXRightSide() {
        return parseInt((this.x + 0.9999 * oneBlockSize)/ oneBlockSize)
    }

    getMapYRightSide() {
        return parseInt((this.y + 0.9999 * oneBlockSize)/ oneBlockSize)
    }
}