// LEVEL TWO
// Use the function
let score = 0

const balls = document.querySelectorAll(".js-ball")
console.log(balls)

const scoreDisplay = document.querySelector(".js-score")
console.log(scoreDisplay)

const levelWinner = document.querySelector(".level-winner")
console.log(levelWinner)

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
// Loop through the list of balls and for each one apply the event
for (let i = 0; i < balls.length; i++) {
  balls[i].addEventListener("click", handelStandardBallClick)
}
