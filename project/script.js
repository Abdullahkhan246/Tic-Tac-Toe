let track = [null, null, null, null, null, null, null, null, null];
let currentPlayer = 'X';
let gameActive = true;
let message = document.getElementById('message');
let boxes = Array.from(document.getElementsByClassName('box'));
const resetButton = document.getElementById('restartBtn');

const match = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function checkWin() {
    for (let combo of match) {
        const [a, b, c] = combo;
        if (track[a]
            && track[a] === track[b]
            && track[b] === track[c]) {
            return track[c];
        }
    }
    return null;
}
boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        if (!gameActive || track[index] !== null) return;


        track[index] = currentPlayer;
        box.innerText = currentPlayer;
        const winner = checkWin();
        if (winner) {
            gameActive = false;
            message.innerText = `${winner} wins!`;
        } else if (!track.includes(null)) {
            gameActive = false;
            message.innerText = "It's a draw!";
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }




    })
});
resetButton.addEventListener('click', () => {
    track = [null, null, null, null, null, null, null, null, null];
    currentPlayer = 'X';
    gameActive = true;
    message.innerText = '';
    boxes.forEach((box) => {
        box.innerText = '';
    });
})
