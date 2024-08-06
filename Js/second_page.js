let timerElement = document.getElementById("timer");
let scoreElement = document.getElementById("score");
let highScoreElement = document.getElementById("highScore");
let startButton = document.getElementById("startButton");
let clickButton = document.getElementById("clickButton");
let usernameInput = document.getElementById("username");

let timeLeft = 10;
let score = 0;
let highScore = localStorage.getItem('highScore') || 0;
let highScoreUsername = localStorage.getItem('highScoreUsername') || '';
let timer;

// Display the current high score and username
highScoreElement.textContent = `${highScore} by ${highScoreUsername}`;

startButton.addEventListener("click", startGame);
clickButton.addEventListener('click', increaseScore);

function startGame() {
    let username = usernameInput.value.trim();
    if (username === '') {
        alert("Please enter a username");
        return;
    }

    score = 0;
    timeLeft = 10;
    scoreElement.textContent = score;
    timerElement.textContent = timeLeft;
    clickButton.style.display = 'inline';
    startButton.style.display = 'none';

    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;
        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

function increaseScore() {
    score++;
    scoreElement.textContent = score;
}

function endGame() {
    clearInterval(timer);
    clickButton.style.display = 'none';
    startButton.style.display = 'inline';
    if (score > highScore) {
        highScore = score;
        highScoreUsername = usernameInput.value.trim();
        highScoreElement.textContent = `${highScore} by ${highScoreUsername}`;

        // Save the new high score and username to local storage
        localStorage.setItem('highScore', highScore);
        localStorage.setItem('highScoreUsername', highScoreUsername);
    }
}
