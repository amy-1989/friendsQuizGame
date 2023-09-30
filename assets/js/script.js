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
const finalScore = document.getElementById('finalScore');

let scoreElement = parseInt(document.getElementById('score').innerText);
let randomiseQuestions;
let currentQuestionIndex;

document.addEventListener('DOMContentLoaded', (e) => {
    playButton.addEventListener('click', beginQuiz);
    instructionButton.addEventListener('click', instructions);

    /**
     * to increment the questions and load the next question when next button is clicked
     */
    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < 10) {
            setNextQuestion();
        } else {
            endGame();
        }
    });

    /**
     * begin the quiz game
     */
    function beginQuiz() {
        console.log('Quiz started');

        //to hide welcome page and display the quiz game section

        welcomePage.classList.add('hide');
        quizArea.classList.remove('hide');

        // to ensure the game generates questions at random for each playthrough        
        // randomiseQuestions = myQuestions.sort(() => Math.random() - .5); (commented out for testing)
        currentQuestionIndex = 0;
        setNextQuestion();
    };

    /**
     * to randomise the questions
     */
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
            return array;
        }
    }

    /**
     * resets question area and loads the next random question
     * */
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
        scoreElement = 0;
        document.getElementById('score').innerText = 0;
        instructionNote.classList.add('hide');
        finalScore.classList.remove('hide');
        welcome.classList.add('hide');
        instructionButton.classList.add('hide');
        leaderboard.classList.remove('hide');
        console.log('endpage function');
        finalScore.innerText = `Well Done! You have scored ${scoreElement}!`;
        leaderboard();
    }

    function leaderboard() {
        const numberOfHighScores = 3;
        const highScoresVariable = 'highScores';

        const highScoreString = localStorage.getItem(highScoresVariable);
        const highScores = JSON.parse(highScoreString) ?? [];
        
        //checks the lowest score on the board to see if a user has scored a high score
        const lowestScore = highScores[numberOfHighScores - 1]?.score??0;
        
        if(scoreElement > lowestScore) {
            saveHighScore(scoreElement, highScores);
            showHighScores();
        }
        function saveHighScore(scoreElement, highScores) {
        const name = prompt('You got a high score! Enter name:');
        const newScore = {scoreElement, name};

        //adds to list
        highScores.push(newScore);

        //sort the list
        highScores.sort((a,b)=> b.scoreElement-a.scoreElement);

        //selects a new list
        highScores.splice(numberOfHighScores);

        //save to local storage
        localStorage.setItem(highScores, JSON.stringify(highScores));

        //retrieve the scores from local storage and add list items to leaderboard innerHTML
        const highScoreList = document.getElementById('highScores');

            highScoreList.innerHTML = highScores.map((scoreElement) => `<li>${scoreElement.scoreElement} - ${scoreElement.name}`)
             
        }

        function showHighScores(){
            highScoreList.innerHTML = highScores.map((scoreElement) => `<li>${scoreElement.scoreElement} - ${scoreElement.name}`).join('');
        }
        }
    }
);