// LEVEL ONE
let score = 0

const ball = document.querySelector(".ball.js-ball")
console.log(ball)

const scoreDisplay = document.querySelector(".js-score")
console.log(scoreDisplay)

const levelWinner = document.querySelector(".level-winner")
console.log(levelWinner)

// For reusability we could create a function and then call it
let handelStandardBallClick = () => {
  // Increment the score
  score += 10

  // Update the text context
  scoreDisplay.textContent = score

  // Check for the score (if it reaches 100)
  if (score >= 100) {
    levelWinner.style.opacity = "1"
  }
}

// Create a function to handle the ball click
ball.addEventListener("click", handelStandardBallClick)
