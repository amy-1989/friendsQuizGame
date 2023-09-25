import { myQuestions } from './questions.js';

const playButton = document.getElementById('playBtn');
const playGuestButton = document.getElementById('playGuestBtn');
const instructionButton = document.getElementById('instructionBtn');
const welcomePage = document.getElementById('popUp');
const quizArea = document.getElementById('quizArea');
const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answerBtns');

let randomiseQuestions, currentQuestionIndex;

playButton.addEventListener('click', beginQuiz);

function beginQuiz() {
    console.log('Quiz started');
    //to hide welcome page and display the quiz game section
    welcomePage.classList.add('hide');
    quizArea.classList.remove('hide');
    // to ensure the game generates questions at random for each playthrough
    randomiseQuestions = myQuestions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    setNextQuestion();
};

function setNextQuestion() {
    displayQuestion(randomiseQuestions[currentQuestionIndex]);
}

function displayQuestion(questions) {
    questionElement.innerText = questions.question;

}

function correctAnswer() { };

function incorrectAnswer() { };

function scoreTally() { };

function finalScore() { };