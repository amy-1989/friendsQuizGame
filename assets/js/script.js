import { myQuestions } from './questions.js';

const playButton = document.getElementById('playBtn');
const instructionButton = document.getElementById('instructionBtn');
const nextButton = document.getElementById('nextBtn');
const saveScoreButton = document.getElementById('saveBtn');
const welcomePage = document.getElementById('popUp');
const quizArea = document.getElementById('quizArea');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answerBtns');
const leaderboardButton = document.getElementById('scoresBtn');
const instructionNote = document.getElementById('instructionNote');
const welcome = document.getElementById('text');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const username = document.getElementById('username');
const leaderboard = document.getElementById('leaderboard');
const result = document.getElementById('endGameResult');
let scoreElement = parseInt(document.getElementById('score').innerText);
const highScoreList = document.getElementById('highScoresList');
const maxHighScores = 3;
const highScoreModal = document.getElementById("myModal");

const score = {
    score: mostRecentScore,
    name: username.value
};
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];


username.addEventListener('keyup', () => {
    saveScoreButton.disabled = !username.value;
});


let randomiseQuestions;
let currentQuestionIndex;

playButton.addEventListener('click', beginQuiz);
instructionButton.addEventListener('click', instructions);
saveScoreButton.addEventListener('click', function (e) {
    saveHighScore(e);
    highScoreModal.classList.add('hide');
});

leaderboardButton.addEventListener('click', displayLeaderboard);
/**
* to increment the questions and load the next question when next button is clicked
*/
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < 10) {
        setNextQuestion();
        localStorage.setItem('mostRecentScore', scoreElement);
    } else {
        endGame();
    }
});

/**
 *  * begin the quiz game
*/
function beginQuiz() {
    console.log('Quiz started');
    //to hide welcome page and display the quiz game section
    welcomePage.classList.add('hide');
    quizArea.classList.remove('hide');

    currentQuestionIndex = 0;
    scoreElement = 0;
    document.getElementById('score').innerText = 0;
    setNextQuestion();
};

/**
* to randomise the questions
*/
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
* resets question area and loads the next random question
*/
function setNextQuestion() {
    resetState();
    randomiseQuestions = shuffleArray(myQuestions);
    displayQuestion(randomiseQuestions[currentQuestionIndex]);
}

/**
* display the question
*/
function displayQuestion(questions) {
    questionElement.innerText = questions.question;

    //display the answers
    shuffleArray(questions.answers);
    questions.answers.forEach(answer => {

        //creates the answer buttons
        let button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('answerButton');

        //check if the answer selected is correct
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);

        //disable the buttons after user makes a choice
        answerButtonsElement.addEventListener('click', () => button.disabled = true,
            nextButton.classList.remove('hide'));
    });

}

/**
 * resets the question and answer area
 */
function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;

    //to increment the score for correct answers
    if (correct) {
        document.getElementById('score').innerText = ++scoreElement;
    }
    //convert answer buttons into an array
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusCLass(button, button.dataset.correct);
    });
}

/**
 * to add styles dependent on selected correct or incorrect answer
 */
function setStatusCLass(element, correct) {
    clearStatusCLass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}
/**
 * removes previous class selections of correct or wrong
 */
function clearStatusCLass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}
/**
 * to display the instructions page
 */
function instructions() {
    leaderboardButton.classList.add('hide');
    instructionButton.classList.add('hide');
    welcome.classList.add('hide');
    instructionNote.classList.remove('hide');
    console.log(instructions);
}
/**
 * to display the end final score page
 */
function endGame() {
    welcomePage.classList.remove('hide');
    quizArea.classList.add('hide');
    playButton.innerText = 'Play Again';
    playButton.classList.remove('hide');
    instructionNote.classList.add('hide');
    welcome.classList.add('hide');
    instructionButton.classList.add('hide');
    leaderboardButton.classList.remove('hide');
    leaderboard.classList.add('hide');
    console.log('endpage function');
    result.innerText = `Well Done! You have scored ${scoreElement}!`;
    highScoreModal.classList.remove('hide');
}
/**
 * to save your score to the leaderboard
 */
function saveHighScore(e) {
    e.preventDefault();

    highScores.push(score);

    highScores.sort((a, b) => {
        return b.score - a.score;
    });

    highScores.splice(3);

    localStorage.setItem('highScores', JSON.stringify(highScores));

    highScoreList.innerHTML = highScores.map(score => {
        return `<li class="highScore">${score.name}-${score.score}`;
    }).join();
}

/**
 * to display the leaderboard
 */
function displayLeaderboard() {
    leaderboard.classList.remove('hide');
    instructionButton.classList.add('hide');
    leaderboardButton.classList.add('hide');
}
