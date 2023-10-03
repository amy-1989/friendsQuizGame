import { myQuestions } from "./questions.js";

/**the code for this quiz was inspired by
 * WebDevSimplified youtube tutorial
 */

/**
 * to target all relevant elements from the DOM
 */

const playButton = document.getElementById("playBtn");
const instructionButton = document.getElementById("instructionBtn");
const nextButton = document.getElementById("nextBtn");
const saveScoreButton = document.getElementById("saveBtn");
const welcomePage = document.getElementById("popUp");
const quizArea = document.getElementById("quizArea");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answerBtns");
const leaderboardButton = document.getElementById("scoresBtn");
const instructionNote = document.getElementById("instructionNote");
const welcome = document.getElementById("text");
const username = document.getElementById("username");
const leaderboard = document.getElementById("leaderboard");
const result = document.getElementById("endGameResult");
let scoreElement = parseInt(document.getElementById("score").innerText);
const highScoreList = document.getElementById("highScoresList");
const maxHighScores = 3;
const highScoreModal = document.getElementById("myModal");
let score = {};
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
let currentQuestionIndex;

/**
 * 'keyup' Event Listener will prevent user from being able to save a score
 * without a username
 */
username.addEventListener("keyup", () => {
  saveScoreButton.disabled = !username.value;
});

/**
 * add 'click' Event Listeners to run the button functions
 * playButton will start the game
 * instructionButton will display how to play the game
 * saveScoreButton will save the scores to leaderboard
 * leaderboard will display the high scores
 */
playButton.addEventListener("click", beginQuiz);

instructionButton.addEventListener("click", instructions);

saveScoreButton.addEventListener("click", function (e) {
  saveHighScore(e);
  highScoreModal.classList.add("hide");
});

leaderboardButton.addEventListener("click", displayLeaderboard);

/**
 * to increment the questions and load the next question when next button is clicked
 */
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < 10) {
    setNextQuestion();
    localStorage.setItem("score", scoreElement);
  } else {
    endGame();
  }
});

/**
 * begins the quiz game
 */
function beginQuiz() {
  console.log("Quiz started");

  //to hide welcome page and display the quiz game section
  welcomePage.classList.add("hide");
  quizArea.classList.remove("hide");

  //shuffles the questions array to generate random questions
  shuffleArray(myQuestions);

  //resets the current question index and scores
  currentQuestionIndex = 0;
  scoreElement = 0;
  document.getElementById("score").innerText = 0;
  setNextQuestion();
}

/**
 * to randomise the questions and answers
 * Fisher-Yates algorithm provided by mentor
 */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/**
 * resets question area and loads the next question
 */
function setNextQuestion() {
  resetState();
  displayQuestion(myQuestions[currentQuestionIndex]);
  console.log(myQuestions);
}

/**
 * displays the question
 */
function displayQuestion(questions) {
  questionElement.innerText = questions.question;

  //shuffle the answers so that the top answer is not always correct
  shuffleArray(questions.answers);

  //displays the answers
  questions.answers.forEach((answer) => {
    //creates the answer buttons
    let button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("answerButton");

    //check if the answer selected is correct
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);

    //disable the buttons after user makes a choice
    answerButtonsElement.addEventListener(
      "click",
      () => (button.disabled = true),
      nextButton.classList.remove("hide")
    );
  });
}

/**
 * resets the question and answer area
 */
function resetState() {
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}
/**
 *
 * @param {event} e
 * incements the score in the event of a selected answer
 * being correct
 */
function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;

  //to increment the score for correct answers
  if (correct) {
    document.getElementById("score").innerText = ++scoreElement;
    console.log(scoreElement);
    console.log(score);
  }
  //convert answer buttons into an array
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusCLass(button, button.dataset.correct);
  });
}

/**
 * to add styles dependent on selected correct or incorrect answer
 */
function setStatusCLass(element, correct) {
  clearStatusCLass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}
/**
 * removes previous class selections of correct or wrong
 */
function clearStatusCLass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}
/**
 * to display the instructions page
 */
function instructions() {
  leaderboardButton.classList.add("hide");
  instructionButton.classList.add("hide");
  welcome.classList.add("hide");
  instructionNote.classList.remove("hide");
  console.log(instructions);
}

/**
 * to display the end final score page
 */
function endGame() {
  welcomePage.classList.remove("hide");
  quizArea.classList.add("hide");
  playButton.innerText = "Play Again";
  playButton.classList.remove("hide");
  instructionNote.classList.add("hide");
  welcome.classList.add("hide");
  instructionButton.classList.add("hide");
  leaderboardButton.classList.remove("hide");
  leaderboard.classList.add("hide");

  //to display the modal
  result.innerText = `Well Done! You have scored ${scoreElement}!`;
  highScoreModal.classList.remove("hide");
}
/**
 * to save your score to the leaderboard
 * the code for this function was inspired by this tutorial
 *  https://www.youtube.com/watch?v=f4fB9Xg2JEY&ab_channel=BrianDesign
 * and this article
 * https://michael-karen.medium.com/how-to-save-high-scores-in-local-storage-7860baca9d68
 */
function saveHighScore(e) {
  e.preventDefault();
  score = {
    score: scoreElement,
    name: username.value,
  };

  highScores.push(score);

  highScores.sort((a, b) => {
    return b.score - a.score;
  });

  highScores.splice(3);

  localStorage.setItem("highScores", JSON.stringify(highScores));

  highScoreList.innerHTML = highScores
    .map((score) => {
      return `<li class="highScore">${score.name} - ${score.score}`;
    })
    .join();
}

/**
 * to display the leaderboard
 */
function displayLeaderboard() {
  leaderboard.classList.remove("hide");
  instructionButton.classList.add("hide");
  leaderboardButton.classList.add("hide");
  highScoreList.innerHTML = highScores
    .map((score) => {
      return `<li class="highScore">${score.name} - ${score.score}`;
    })
    .join();
}
