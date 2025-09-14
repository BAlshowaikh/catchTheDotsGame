// LEVEL THREE
let score = 0

const balls = document.querySelectorAll(".js-ball")
console.log(balls)

const scoreDisplay = document.querySelector(".js-score")
console.log(scoreDisplay)

const levelWinner = document.querySelector(".level-winner")
console.log(levelWinner)

// Function to handle all ball sizes
let handleAllBallsClick = (id) => {
  let idInt = parseInt(id)
  // Increment the score
  switch (idInt) {
    case 20:
      score += 20
      break
    case 5:
      score += 5
      break
    case 10:
      score += 10
      break
    default:
      return
  }

  // Update the text context
  scoreDisplay.textContent = score

  // Check for the score (if it reaches 100)
  if (score >= 100) {
    levelWinner.style.opacity = "1"
  }
}

for (let i = 0; i < balls.length; i++) {
  balls[i].addEventListener("click", function () {
    handleAllBallsClick(this.id)
  })
}
