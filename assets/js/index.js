import { questions } from "./questions.js";

// Timer
const time = document.getElementById("time");
// Start screen
const startScreen = document.getElementById("start-screen");
const start = document.getElementById("start");
// Questions
const questionsContainer = document.getElementById("questions");
const questionTitle = document.getElementById("question-title");
const choices = document.getElementById("choices");
// End screen
const endScreen = document.getElementById("end-screen");
const finalScore = document.getElementById("final-score");
const intials = document.getElementById("initials");
const submit = document.getElementById("submit");
// Feedback
const feedback = document.getElementById("feedback");


// Generate 10 random questions from questions list
const getRandomIndex = (arr) =>
  arr[Math.floor(Math.random() * arr.length)];

const getRandomQuestions = (length, questions) =>
  Array.from({ length }, () => getRandomIndex(questions));

const randomQuestions = getRandomQuestions(10, questions);

// Trackers
let score = 0;
let timeLeft = 0;
let currentQuestionIndex = 0;
let currentQuestion = randomQuestions[currentQuestionIndex];
let questionNum = currentQuestionIndex + 1;
let correctAnswer = currentQuestion.correctAnswer;

// Quiz logic
start.addEventListener("click", () => startQuiz());

const startQuiz = () => {
  currentQuestionIndex = 0;
  score = 0;
  timeLeft = 75;
  time.textContent = timeLeft;
  showQuestions();
}

const showQuestions = () => {
  startScreen.classList.add("hide");
  questionsContainer.classList.remove("hide");

  questionTitle.textContent = `${questionNum}. ${currentQuestion.question}`;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.textContent = answer.join(". ");
    choices.appendChild(button);

    if (answer[0] === correctAnswer) {
      button.dataset.correct = correctAnswer;
    }
    button.addEventListener("click", selectAnswer);
  });
}

const selectAnswer = (e) => {
  const selectedAnswer = e.target;
  const isCorrect = selectedAnswer.dataset.correct === correctAnswer;
  let feedbackTimer = 2;

  if (isCorrect) {
    feedback.textContent = "Correct!";
    feedback.classList.remove("hide");
  } else {
    feedback.textContent = "Wrong!";
    feedback.classList.remove("hide");
  }

  const feedbackInterval = setInterval(() => {
    feedbackTimer--;
    if (feedbackTimer === 0) {
      feedback.classList.add("hide");
      clearInterval(feedbackInterval);
    }
  }, 1000);
}