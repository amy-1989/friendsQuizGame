import { myQuestions } from './questions.js';

const playButton = document.getElementById('playBtn');
const instructionButton = document.getElementById('instructionBtn');
const nextButton = document.getElementById('nextBtn');
const welcomePage = document.getElementById('popUp');
const quizArea = document.getElementById('quizArea');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answerBtns');
const leaderboardButton = document.getElementById('scoresBtn');
const instructionNote = document.getElementById('instructionNote');
const welcome = document.getElementById('text');

let scoreElement = parseInt(document.getElementById('score').innerText);
let randomiseQuestions, currentQuestionIndex;

playButton.addEventListener('click', beginQuiz);
instructionButton.addEventListener('click', instructions);

//to increment the questions and load the next question when next button is clicked
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < 10) {
        setNextQuestion();
    } else {
        welcomePage.classList.remove('hide');
        quizArea.classList.add('hide');
        playButton.innerText = 'Play Again';
        playButton.classList.remove('hide');
        document.getElementById('score').innerText = 0;
        instructionNote.classList.add('hide');
    }
});

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
//resets question area and loads the next random question
function setNextQuestion() {
    resetState();
    displayQuestion(randomiseQuestions[currentQuestionIndex]);
}

//display the question
function displayQuestion(questions) {
    questionElement.innerText = questions.question;

    //display the answers
    questions.answers.forEach(answer => {

        //creates the answer buttons
        let button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');

        //check if the answer selected is correct
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);

        //disable the button after user makes a choice
        button.addEventListener('click', () => button.disabled = true);
            
    });
    
}
//resets the question and answer area
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

    //to show the next button
    nextButton.classList.remove('hide');
}

//to add styles dependent on selected correct or incorrect answer
function setStatusCLass(element, correct) {
    clearStatusCLass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}
//removes previous class selections of correct or wrong
function clearStatusCLass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}
// to display the instructions page
function instructions() {
    leaderboardButton.classList.add('hide');
    instructionButton.classList.add('hide');
    welcome.classList.add('hide');
    instructionNote.classList.remove('hide');
    console.log(instructions);
    }


function finalScore() {
    
};