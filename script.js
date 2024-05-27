// script.js
document.addEventListener('DOMContentLoaded', () => {
    const setSecretButton = document.getElementById('set-secret');
    const submitGuessButton = document.getElementById('submit-guess');
    const secretInput = document.getElementById('secret-number');
    const guessInput = document.getElementById('guess');
    const feedbackContainer = document.getElementById('feedback');
    const gameSection = document.getElementById('game');
    const setupSection = document.getElementById('setup');
    let secretNumber = '';

    setSecretButton.addEventListener('click', () => {
        if (secretInput.value.length === 4) {
            secretNumber = secretInput.value;
            secretInput.value = '';
            setupSection.style.display = 'none';
            gameSection.style.display = 'block';
        } else {
            alert('Please enter a 4-digit number.');
        }
    });

    function createKeyboard() {
        const keyboard = document.getElementById('keyboard');
        for (let i = 0; i <= 9; i++) {
            const button = document.createElement('button');
            button.textContent = i;
            button.addEventListener('click', () => {
                if (guessInput.value.length < 4) {
                    guessInput.value += i;
                }
            });
            keyboard.appendChild(button);
        }
    }

    createKeyboard();

    submitGuessButton.addEventListener('click', () => {
        if (guessInput.value.length === 4) {
            const guess = guessInput.value;
            provideFeedback(guess);
            guessInput.value = '';
        } else {
            alert('Please enter a 4-digit guess.');
        }
    });

    function provideFeedback(guess) {
        const feedbackItem = document.createElement('div');
        feedbackItem.classList.add('feedback-item');
        
        for (let i = 0; i < 4; i++) {
            const span = document.createElement('span');
            span.textContent = guess[i];
            if (guess[i] === secretNumber[i]) {
                span.classList.add('correct');
            }
            feedbackItem.appendChild(span);
        }
        
        feedbackContainer.appendChild(feedbackItem);
        
        if (guess === secretNumber) {
            alert('Congratulations! You guessed the number!');
        }
    }
});
