const grid = document.querySelector('.grid');
const scoreDisplay = document.querySelector('#score');
const blockWidth = 100;
const blockHeight = 20;
const boardWidth = 560;
const UserStart = [230, 10];
const ballDiamater = 20
const boardHeight = 300
let timeID
let xDirection = -2;
let yDirection = 2;

let currentPostion = UserStart;


const ballStart = [270, 40];
let ballCurrentPostion = ballStart;
//  Create a Block 
class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis, yAxis]
        this.bottomRight = [xAxis = blockWidth, yAxis]
        this.topLeft = [xAxis, yAxis + blockHeight]
        this.topRight = [xAxis + blockWidth, yAxis + blockWidth]
    }
}
// All my Blocks 
const blocks = [
        new Block(10, 270),
        new Block(120, 270),
        new Block(230, 270),
        new Block(340, 270),
        new Block(450, 270),
        new Block(10, 240),
        new Block(120, 240),
        new Block(230, 240),
        new Block(340, 240),
        new Block(450, 240),
        new Block(10, 210),
        new Block(120, 210),
        new Block(230, 210),
        new Block(340, 210),
        new Block(450, 210)
    ]
    // console.log(blocks[1]);
    // draw all my block
function addBlocks() {
    //    
    for (let i = 0; i < blocks.length; i++) {
        const block = document.createElement('div');
        block.classList.add('block')
        grid.appendChild(block)
        block.style.left = blocks[i].bottomLeft[0] + 'px'
        block.style.bottom = blocks[i].bottomLeft[1] + 'px'
    }
}
addBlocks();

//  add user

const user = document.createElement("div");
user.classList.add('user')
drawUser();
grid.appendChild(user)
    // Draw the user

function drawUser() {
    user.style.left = currentPostion[0] + 'px';
    user.style.bottom = currentPostion[1] + 'px';
}
// Draw the Ball

function drawBall() {
    ball.style.left = ballCurrentPostion[0] + 'px';
    ball.style.bottom = ballCurrentPostion[1] + 'px';
}
// move user

function moveUser(e) {
    switch (e.key) {
        case 'ArrowLeft':
            if (currentPostion[0] > 0) {
                currentPostion[0] -= 10
                drawUser();

            }
            break;

        case 'ArrowRight':
            if (currentPostion[0] < boardWidth - blockWidth) {
                currentPostion[0] += 10
                drawUser();

            }
            break;

        default:
            console.log("please  press 'ArrowLeft' Key or  any 'ArrowRight' key to Move User ");
            break;
    }
}

document.addEventListener('keydown', moveUser);
// create a ball

const ball = document.createElement('div');
ball.classList.add('ball')
drawBall();
grid.appendChild(ball)
    // fomve the Ball
function moveBall() {
    ballCurrentPostion[0] += xDirection;
    ballCurrentPostion[1] += yDirection;
    drawBall();
    checkForCollisions();
}

timeID = setInterval(moveBall, 30);

//check for collision
function checkForCollisions() {
    // check for Block Collisions

    for (let i = 0; i < blocks.length; i++) {

    }








    // chec for wall collisons
    if (
        ballCurrentPostion[0] >= (boardWidth - ballDiamater) ||
        ballCurrentPostion[1] >= (boardHeight - ballDiamater) ||
        ballCurrentPostion[0] <= 0

    ) {
        changeDirection()
    }

    // chcek for game over
    if (ballCurrentPostion[1] <= 0) {
        clearInterval(timeID);
        // console.log()
        scoreDisplay.innerHTML = "You Lose";
        document.removeEventListener('keydown', moveUser)

    }
}

function changeDirection() {
    if (xDirection === 2 && yDirection == 2) {
        yDirection = -2;
        return;
    }
    if (xDirection === 2 && yDirection === -2) {
        xDirection = -2;
        return;
    }

    if (xDirection === -2 && yDirection === -2) {
        yDirection = 2;
        return
    }


    if (xDirection === -2 && yDirection === 22) {
        xDirection = 2;
        return
    }
}