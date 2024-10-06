let wins = 0;
let timeLeft = 30;
let gameActive = true;
let timer;

function startTimer() {
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            document.getElementById('timer').textContent = `Time left: ${timeLeft}`;
        } else {
            clearInterval(timer);
            document.getElementById('result').textContent = 'Time is up!';
            document.querySelector('.game').style.display = 'none';
            document.getElementById('resetButton').style.display = 'block';
            gameActive = false;
        }
    }, 1000);
}

function playGame(playerChoice) {
    if (!gameActive) return;

    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    // Update emoji visuals
    const emojiMap = {
        rock: '✊',
        paper: '🖐',
        scissors: '✌️'
    };
    document.getElementById('playerEmoji').textContent = emojiMap[playerChoice];
    document.getElementById('opponentEmoji').textContent = emojiMap[computerChoice];

    let result = '';

    if (playerChoice === computerChoice) {
        result = 'It\'s a draw!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = `You win! ${playerChoice} beats ${computerChoice}`;
        wins++;
        document.getElementById('wins').textContent = `Wins: ${wins}`;
    } else {
        result = `You lose! ${computerChoice} beats ${playerChoice}`;
    }

    document.getElementById('result').textContent = result;
}

function resetGame() {
    wins = 0;
    timeLeft = 30;
    gameActive = true;
    document.getElementById('wins').textContent = `Wins: ${wins}`;
    document.getElementById('timer').textContent = `Time left: 30`;
    document.getElementById('result').textContent = '';
    document.getElementById('playerEmoji').textContent = '❔';
    document.getElementById('opponentEmoji').textContent = '❔';
    document.querySelector('.game').style.display = 'flex';
    document.getElementById('resetButton').style.display = 'none';
    clearInterval(timer);
    startTimer();
}

// Start the timer when the page loads
window.onload = () => {
    startTimer();
}
