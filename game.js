// Game state
let gameState = {
    currentQuestionIndex: 0,
    score: 0,
    totalQuestions: 0,
    currentCountry: null,
    questionsAnswered: 0,
    gameActive: true,
    usedHint: false,
    gameSequence: []
};

// Initialize the game
function initializeGame() {
    gameState = {
        currentQuestionIndex: 0,
        score: 0,
        totalQuestions: countries.length,
        currentCountry: null,
        questionsAnswered: 0,
        gameActive: true,
        usedHint: false,
        gameSequence: shuffleArray([...countries])
    };
    
    document.getElementById('gameEnd').classList.add('hidden');
    document.querySelector('.game-container').style.display = 'block';
    
    loadNextQuestion();
}

// Load the next question
function loadNextQuestion() {
    if (gameState.currentQuestionIndex >= gameState.totalQuestions) {
        endGame();
        return;
    }
    
    gameState.currentCountry = gameState.gameSequence[gameState.currentQuestionIndex];
    gameState.usedHint = false;
    
    displayFlag();
    displayOptions();
    clearFeedback();
    updateScoreBoard();
    
    document.getElementById('hint-btn').disabled = false;
    document.getElementById('skip-btn').disabled = false;
}

// Display the flag
function displayFlag() {
    const flagElement = document.getElementById('flag');
    flagElement.textContent = gameState.currentCountry.flag;
}

// Display answer options
function displayOptions() {
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    const options = getRandomCountries(gameState.currentCountry, 4);
    
    options.forEach(country => {
        const button = document.createElement('button');
        button.className = 'option';
        button.textContent = country.name;
        button.onclick = () => checkAnswer(country);
        optionsContainer.appendChild(button);
    });
}

// Check the answer
function checkAnswer(selectedCountry) {
    const feedback = document.getElementById('feedback');
    const isCorrect = selectedCountry.name === gameState.currentCountry.name;
    
    if (isCorrect) {
        gameState.score++;
        feedback.className = 'feedback correct';
        feedback.textContent = `✓ Correct! That's ${gameState.currentCountry.name}!`;
    } else {
        feedback.className = 'feedback incorrect';
        feedback.textContent = `✗ Wrong! It was ${gameState.currentCountry.name}, not ${selectedCountry.name}`;
    }
    
    feedback.classList.remove('hidden');
    
    // Disable all options
    document.querySelectorAll('.option').forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === gameState.currentCountry.name) {
            btn.classList.add('correct');
        } else if (btn.textContent === selectedCountry.name && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });
    
    document.getElementById('hint-btn').disabled = true;
    document.getElementById('skip-btn').disabled = true;
    
    gameState.questionsAnswered++;
    updateScoreBoard();
    
    // Move to next question after delay
    setTimeout(() => {
        gameState.currentQuestionIndex++;
        loadNextQuestion();
    }, 2000);
}

// Skip current question
function skipQuestion() {
    const feedback = document.getElementById('feedback');
    feedback.className = 'feedback';
    feedback.textContent = `Skipped! It was ${gameState.currentCountry.name}`;
    feedback.classList.remove('hidden');
    
    document.querySelectorAll('.option').forEach(btn => btn.disabled = true);
    document.getElementById('hint-btn').disabled = true;
    document.getElementById('skip-btn').disabled = true;
    
    gameState.questionsAnswered++;
    updateScoreBoard();
    
    setTimeout(() => {
        gameState.currentQuestionIndex++;
        loadNextQuestion();
    }, 2000);
}

// Show hint
function showHint() {
    if (gameState.usedHint) return;
    
    gameState.usedHint = true;
    const feedback = document.getElementById('feedback');
    const hint = hints[gameState.currentCountry.name];
    
    feedback.className = 'feedback hint';
    feedback.textContent = `💡 Hint: ${hint}`;
    feedback.classList.remove('hidden');
    
    document.getElementById('hint-btn').disabled = true;
}

// Update score board
function updateScoreBoard() {
    document.getElementById('score').textContent = gameState.score;
    document.getElementById('question-count').textContent = gameState.questionsAnswered;
    
    const accuracy = gameState.questionsAnswered > 0 
        ? Math.round((gameState.score / gameState.questionsAnswered) * 100) 
        : 0;
    document.getElementById('accuracy').textContent = accuracy + '%';
}

// Clear feedback
function clearFeedback() {
    const feedback = document.getElementById('feedback');
    feedback.classList.add('hidden');
    feedback.textContent = '';
}

// End game
function endGame() {
    document.querySelector('.game-container').style.display = 'none';
    document.getElementById('gameEnd').classList.remove('hidden');
    
    const finalScore = gameState.score;
    const totalQuestions = gameState.totalQuestions;
    const percentage = Math.round((finalScore / totalQuestions) * 100);
    
    document.getElementById('final-score').textContent = `${finalScore}/${totalQuestions}`;
    document.getElementById('final-accuracy').textContent = `${percentage}%`;
    
    let performance = '';
    if (percentage === 100) {
        performance = '🏆 Perfect! You\'re a geography expert!';
    } else if (percentage >= 90) {
        performance = '🥇 Excellent! Outstanding knowledge!';
    } else if (percentage >= 75) {
        performance = '🥈 Great! Very good performance!';
    } else if (percentage >= 60) {
        performance = '🥉 Good! Keep practicing!';
    } else if (percentage >= 40) {
        performance = '👍 Not bad! Learn more countries!';
    } else {
        performance = '📚 Keep learning! You\'ll improve!';
    }
    
    document.getElementById('performance').textContent = performance;
}

// Restart game
function restartGame() {
    initializeGame();
}

// Event listeners
document.getElementById('skip-btn').addEventListener('click', skipQuestion);
document.getElementById('hint-btn').addEventListener('click', showHint);
document.getElementById('restart-btn').addEventListener('click', restartGame);

// Start game on page load
window.addEventListener('load', initializeGame);
