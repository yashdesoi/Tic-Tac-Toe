let blocks = document.querySelectorAll('.block');
let playerOne = document.querySelector('.player1');
let playerTwo = document.querySelector('.player2');
let grid = document.querySelector('.container');
let message = document.querySelector('.message');
let reset = document.querySelector('.holder > button');
let gameOn = true;


// Function to check whether the game is over or not
let continueWithGame = function(){
    let grid = [
        blocks[0].textContent,
        blocks[1].textContent,
        blocks[2].textContent,
        blocks[3].textContent,
        blocks[4].textContent,
        blocks[5].textContent,
        blocks[6].textContent,
        blocks[7].textContent,
        blocks[8].textContent
    ]
    let colorWin = 'lime';
    let colorDraw = 'orange';

    // Row check
    for (let i of [0, 3, 6]) {
        if ((grid[i] === 'X' && grid[i+1] === 'X' && grid[i+2] === 'X') || (grid[i] === 'O' && grid[i+1] === 'O' && grid[i+2] === 'O')) {
            blocks[i].style.color = colorWin;
            blocks[i+1].style.color = colorWin;
            blocks[i+2].style.color = colorWin;
            return 'somebody won';
        } else {
            continue;
        }
    }

    // Column check
    for (let i of [0, 1, 2]) {
        if ((grid[i] === 'X' && grid[i+3] === 'X' && grid[i+6] === 'X') || (grid[i] === 'O' && grid[i+3] === 'O' && grid[i+6] === 'O')) {
            blocks[i].style.color = colorWin;
            blocks[i+3].style.color = colorWin;
            blocks[i+6].style.color = colorWin;
            return 'somebody won';
        } else {
            continue;
        }
    }

    // Diagonal check
    if ((grid[0] === 'X' && grid[4] === 'X' && grid[8] === 'X') || (grid[0] === 'O' && grid[4] === 'O' && grid[8] === 'O')) {
        blocks[0].style.color = colorWin;
        blocks[4].style.color = colorWin;
        blocks[8].style.color = colorWin;
        return 'somebody won';
    } else if ((grid[2] === 'X' && grid[4] === 'X' && grid[6] === 'X') || (grid[2] === 'O' && grid[4] === 'O' && grid[6] === 'O')) {
        blocks[2].style.color = colorWin;
        blocks[4].style.color = colorWin;
        blocks[6].style.color = colorWin;
        return 'somebody won';
    }

    // Draw check
    if (!grid.includes('')) {
        blocks.forEach(element => {
            element.style.color = colorDraw;
        });
        return 'draw';
    }

    return 'continue';
}

let i = 0;


// MOUSE CONTROL
blocks.forEach(element => {
    element.addEventListener('click', event => {
        if (gameOn) {
            if (event.target.textContent !== '') {
                message.style.color = 'red';
                message.textContent = 'Region already occupied :(';
            } else {
                if (i%2 === 0) {
                    message.textContent = '';
                    event.target.textContent = 'X';
                    playerOne.style.boxShadow = '0 2px 4px rgba(0,0,0,0.5)';
                    playerTwo.style.boxShadow = '0 6px 8px rgba(0,0,0,0.5)';
                    i += 1;
                } else {
                    message.textContent = '';
                    event.target.textContent = 'O';
                    playerOne.style.boxShadow = '0 6px 8px rgba(0,0,0,0.5)';
                    playerTwo.style.boxShadow = '0 2px 4px rgba(0,0,0,0.5)';
                    i += 1;
                }
            }

            let result = continueWithGame();

            if (result !== 'continue') {
                gameOn = false;
                reset.style.display = 'inline-block';
                message.style.color = 'blue';
                
                if (result === 'somebody won' && i%2 === 0) {
                    message.textContent = 'Player 2 won :)';
                    playerTwo.style.boxShadow = '0 6px 8px rgba(0,0,0,0.5)';
                    playerTwo.style.color = 'lime';
                    playerOne.style.color = 'red';
                } else if (result === 'somebody won') {
                    message.textContent = 'Player 1 won :)';
                    playerOne.style.boxShadow = '0 6px 8px rgba(0,0,0,0.5)';
                    playerOne.style.color = 'lime';
                    playerTwo.style.color = 'red';
                } else {
                    playerOne.style.boxShadow = '0 6px 8px rgba(0,0,0,0.5)';
                    playerTwo.style.boxShadow = '0 6px 8px rgba(0,0,0,0.5)';
                    message.textContent = 'Draw -_-';
                }
            }
        } 
    });
});


// KEYBOARD CONTROL

// Function which does everything what above 'click' event listner does
let keyboard = function(index){
    if (gameOn) {
        if (blocks[index].textContent !== '') {
            message.style.color = 'red';
            message.textContent = 'Region already occupied :(';
        } else {
            if (i%2 === 0) {
                message.textContent = '';
                blocks[index].textContent = 'X';
                playerOne.style.boxShadow = '0 2px 4px rgba(0,0,0,0.5)';
                playerTwo.style.boxShadow = '0 6px 8px rgba(0,0,0,0.5)';
                i += 1;
            } else {
                message.textContent = '';
                blocks[index].textContent = 'O';
                playerOne.style.boxShadow = '0 6px 8px rgba(0,0,0,0.5)';
                playerTwo.style.boxShadow = '0 2px 4px rgba(0,0,0,0.5)';
                i += 1;
            }
        }

        let result = continueWithGame();

        if (result !== 'continue') {
            gameOn = false;
            reset.style.display = 'inline-block';
            message.style.color = 'blue';
            
            if (result === 'somebody won' && i%2 === 0) {
                message.textContent = 'Player 2 won :)';
                playerTwo.style.boxShadow = '0 6px 8px rgba(0,0,0,0.5)';
                playerTwo.style.color = 'lime';
                playerOne.style.color = 'red';
            } else if (result === 'somebody won') {
                message.textContent = 'Player 1 won :)';
                playerOne.style.boxShadow = '0 6px 8px rgba(0,0,0,0.5)';
                playerOne.style.color = 'lime';
                playerTwo.style.color = 'red';
            } else {
                playerOne.style.boxShadow = '0 6px 8px rgba(0,0,0,0.5)';
                playerTwo.style.boxShadow = '0 6px 8px rgba(0,0,0,0.5)';
                message.textContent = 'Draw -_-';
            }
        }
    }
}

let keyMap = {
    '7': 0,
    '8': 1,
    '9': 2,
    '4': 3,
    '5': 4,
    '6': 5,
    '1': 6,
    '2': 7,
    '3': 8
}


grid.addEventListener('keyup', event => {
    if (['1','2','3','3','4','5','6','7','8','9',].includes(event.key)) {
        keyboard(keyMap[event.key]);
    }
});



// To reset the game
reset.addEventListener('click', event => {
    i = 0;
    gameOn = true;
    blocks.forEach(element => {
        element.style.color = 'black';
        element.textContent = '';
    });
    message.textContent = '';
    event.target.style.display = 'none';
    playerOne.style.color = 'white';
    playerOne.style.boxShadow = '0 6px 8px rgba(0,0,0,0.5)';
    playerTwo.style.color = 'white';
    playerTwo.style.boxShadow = '0 2px 4px rgba(0,0,0,0.5)';
});