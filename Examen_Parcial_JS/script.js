// Generate a random number between 1 and 100 when the page loads
let randomNumber = Math.floor(Math.random() * 100) + 1;
// Show the random number in console for debugging purposes
console.log("Random Number (for testing):", randomNumber);

// Initialize attempt counter and max attempts
let attempts = 0;
const maxAttempts = 5;

// Get references to DOM elements
const form = document.getElementById("guess-form");
const input = document.getElementById("guess-input");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");
const resetButton = document.getElementById("reset-button");
const guessHistory = document.getElementById("guess-history");

// Store all previous guesses
let guesses = [];

// Function to update the message area with styled feedback
function showMessage(text, isSuccess) {
  message.textContent = text;
  message.className = "message"; // Reset class

  if (isSuccess === true) {
    message.classList.add("success");
  } else if (isSuccess === false) {
    message.classList.add("error");
  }
}

// Function to update the guess history list
function updateHistory(guess) {
  const listItem = document.createElement("li");
  listItem.textContent = `Guess ${attempts}: ${guess}`;
  guessHistory.appendChild(listItem);
}

// Function to reset the game
function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log("New Random Number:", randomNumber); // Show the new random number in console when reset the game
  attempts = 0;
  guesses = [];
  input.value = "";
  message.textContent = "";
  message.className = "message";
  attemptsDisplay.textContent = "Attempts: 0";
  guessHistory.innerHTML = "";
  input.disabled = false;
}

// Handle form submission
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload

  const userGuess = Number(input.value);

  // Input validation (1-100)
  if (userGuess < 1 || userGuess > 100) {
    showMessage("Please enter a number between 1 and 100.", false);
    return;
  }

  // Increment attempt count
  attempts++;
  attemptsDisplay.textContent = `Attempts: ${attempts}`;
  guesses.push(userGuess);
  updateHistory(userGuess);

  // Compare guess with the random number
  if (userGuess === randomNumber) {
    showMessage(`Correct! You guessed it in ${attempts} attempts! 🎉`, true);
    input.disabled = true;
  } else if (userGuess < randomNumber) {
    showMessage("Too low. Try again!", false);
  } else {
    showMessage("Too high. Try again!", false);
  }

  // Check if attempts are exhausted
  if (attempts >= maxAttempts && userGuess !== randomNumber) {
    showMessage(`You lost! The correct number was ${randomNumber}.`, false);
    input.disabled = true;
  }

  // Clear the input for the next try
  input.value = "";
});

// Restart the game when clicking reset
resetButton.addEventListener("click", resetGame);
