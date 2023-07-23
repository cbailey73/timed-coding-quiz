const quizContainer = document.getElementById("quiz-container");
const questionContainer = document.getElementById("question-container");
const answerContainer = document.getElementById("answer-container");
const startContainer = document.getElementById("start-container");


const questions = [
    {
    question: "What is the purpose of an array?",
    answers: {
        a: "To identify a specific section of HTML code",
        b: "To allow the storage of multiple items under a single variable",
        c: "To perform tasks and calculate values",
        d: "To display a dialogue box on the top of a webpage"
    },
    correctAnswer: "b",
    },
    {
    question: "What is jQuery?",
    answers: {
        a: "A cross-platform environment used for file and terminal communications",
        b: "A language used to create a webpage's structure",
        c: "A language used to style a webpage",
        d: "A JavaScript framework"
    },
    correctAnswer: "d",
    },
    {
    question: "Which CSS layout model should you use if you want your webpage to respond to different screen sizes?",
    answers: {
        a: "Flex", 
        b: "Inline", 
        c: "Block", 
        d: "Inline-Block"
    },
    correctAnswer: "a",
    },
    {
    question: "Which JavaScript function should you use to collect data stored on other websites?",
    answers: {
        a: "Math.random()", 
        b: "fetch()", 
        c: "setInterval()", 
        d: "parseInt()"
    },
    correctAnswer: "b",
    },
    {
    question: "On an HTML file, where should you place your JavaScript file links?",
    answers: {
        a: "The first line of your head section",
        b: "The first line of your HTML document",
        c: "The last line of your body section",
        d: "The last line of your HTML document"
    },
    correctAnswer: "c",
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 90;
let timerId;

function startQuiz() {
    startContainer.style.display = "none";
    questionContainer.innerHTML = "";
    showQuestion();
    startTimer();
  }
  

function showQuestion() {
    const questionData = questions[currentQuestionIndex];
    const questionElement = document.createElement("h3");
    const answersElement = document.createElement("div");
    const resultElement = document.createElement("p");
    const nextButton = document.createElement("button");
  
    questionElement.textContent = questionData.question;
    questionContainer.appendChild(questionElement);
  
    for (const [answer, value] of Object.entries(questionData.answers)) {
      const answerButton = document.createElement("button");
      answerButton.textContent = value;
      answerButton.setAttribute("class", "answer-button");
      answerButton.setAttribute("data-answer", answer);
      answerButton.addEventListener("click", checkAnswer);
  
      answersElement.appendChild(answerButton);
    }
  
    answerContainer.appendChild(answersElement);
  
    resultElement.setAttribute("class", "result");
    quizContainer.appendChild(resultElement);
  
    nextButton.textContent = "Next Question";
    nextButton.setAttribute("id", "next-button");
    nextButton.addEventListener("click", nextQuestion);
    nextButton.style.display = "none";
    quizContainer.appendChild(nextButton);
  }
  

function checkAnswer(event) {
    const selectedAnswer = event.target.getAttribute("data-answer");
    const questionData = questions[currentQuestionIndex];
    const resultElement = document.querySelector(".result");
    const nextButton = document.getElementById("next-button");

    if (selectedAnswer === questionData.correctAnswer) {
        score += 20;
        resultElement.textContent = "Correct!";
        resultElement.style.color = "green";
    } else {
        timeLeft -= 10;
        resultElement.textContent = "Incorrect!";
        resultElement.style.color = "red";
    }

    const answerButtons = document.querySelectorAll(".answer-button");
    answerButtons.forEach((button) => {
        button.disabled = true;
    });

    nextButton.style.display = "block";
};

function nextQuestion() {
    const resultElement = document.querySelector(".result");
    const nextButton = document.getElementById("next-button");
  
    currentQuestionIndex++;
    resultElement.textContent = "";
    resultElement.style.color = "inherit";
    nextButton.style.display = "none";
    startContainer.style.display = "none"; 
  
    if (currentQuestionIndex < questions.length) {
      questionContainer.innerHTML = "";
      answerContainer.innerHTML = "";
      showQuestion();
    } else {
      endQuiz();
    }
  }
  

function startTimer() {
    timerId = setInterval(() => {
        document.getElementById("time-span").textContent = `Time left: ${timeLeft} seconds`;

        if (timeLeft === 0) {
            clearInterval(timerId);
            endQuiz();
        } else {
            timeLeft--;
        }
    }, 1000);
}

function endQuiz() {
    clearInterval(timerId);
            quizContainer.innerHTML = `
            <h2 class="ending">The quiz has ended! Your score is <span id="score">${score}</span>.</h2>
            <form id="initials-form">
              <label for="initials">Enter your initials:</label>
              <input type="text" id="initials" name="initials" maxlength="3" required>
              <button id="save-button">Save</button>
            </form>
            <button id="restart-button">Restart Quiz</button>
            `;
            document.getElementById("restart-button").addEventListener("click", restartQuiz);

            const saveButton = document.getElementById("save-button");
            saveButton.addEventListener("click", saveScore);
}

function saveScore(event) {
    event.preventDefault();
    const initialsInput = document.getElementById("initials");
    const initials = initialsInput.value;
  
    const highscores = JSON.parse(localStorage.getItem("highscores")) || [];
  
    highscores.push({ initials, score });
  
    highscores.sort((a, b) => b.score - a.score);
  
    const top10Highscores = highscores.slice(0, 10);
  
    localStorage.setItem("highscores", JSON.stringify(top10Highscores));

    initialsInput.value = ""
  };

function restartQuiz() {
    location.reload();
  };

document.getElementById("start-button").addEventListener("click", startQuiz);