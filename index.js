// Your Code Here
//User enters name
let userName = window.prompt("Please enter your name:");
let userScore = 0;

//Function to play the game and display trivia questions
function playGame() {
  for (let i = 0; i < questions.length; i++) {
    let question = questions[i];
    let userAnswer = window.prompt(question.text);
    if (userAnswer === question.correctAnswer) {
      userScore = userScore + 10;
    }
  }
  window.alert("Your score is: " + userScore);
}

playGame();
