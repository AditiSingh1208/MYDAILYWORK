const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Rome",
        correct: "c",
    },
    {
        question: "Which planet is known as the Red Planet?",
        a: "Earth",
        b: "Mars",
        c: "Jupiter",
        d: "Saturn",
        correct: "b",
    },
    {
        question: "What is the largest ocean on Earth?",
        a: "Indian Ocean",
        b: "Atlantic Ocean",
        c: "Arctic Ocean",
        d: "Pacific Ocean",
        correct: "d",
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        a: "Harper Lee",
        b: "Mark Twain",
        c: "Ernest Hemingway",
        d: "F. Scott Fitzgerald",
        correct: "a",
    },
    {
        question: "What is the smallest prime number?",
        a: "0",
        b: "1",
        c: "2",
        d: "3",
        correct: "c",
    },
];

let currentQuestionIndex = 0;
let score = 0;

const quizContainer = document.getElementById("quiz");
const nextButton = document.getElementById("next-button");
const scoreDisplay = document.getElementById("score");

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    quizContainer.innerHTML = `
        <h2>${currentQuestion.question}</h2>
        <label><input type="radio" name="answer" value="a"> ${currentQuestion.a}</label><br>
        <label><input type="radio" name="answer" value="b"> ${currentQuestion.b}</label><br>
        <label><input type="radio" name="answer" value="c"> ${currentQuestion.c}</label><br>
        <label><input type="radio" name="answer" value="d"> ${currentQuestion.d}</label><br>
    `;
}

function getSelectedAnswer() {
    const answers = document.querySelectorAll('input[name="answer"]');
    for (const answer of answers) {
        if (answer.checked) {
            return answer.value;
        }
    }
    return null;
}

nextButton.addEventListener("click", () => {
    const answer = getSelectedAnswer();
    if (answer) {
        if (answer === quizData[currentQuestionIndex].correct) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            quizContainer.innerHTML = `<h2>Your score: ${score}/${quizData.length}</h2>
                                       <button onclick="location.reload()">Restart Quiz</button>`;
            nextButton.style.display = 'none'; // Hide the next button
        }
    } else {
        alert("Please select an answer!");
    }
});

// Load the first question
loadQuestion();