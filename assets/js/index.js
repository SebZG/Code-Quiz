import { questions } from "./questions.js";

// ELEMENTS
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
const initials = document.getElementById("initials");
const submit = document.getElementById("submit");
// Feedback
const feedback = document.getElementById("feedback");


// Generate 10 random questions from questions list
const getRandomIndex = (arr) =>
  arr[Math.floor(Math.random() * arr.length)];

const getRandomQuestions = (length, questions) =>
  Array.from({ length }, () => getRandomIndex(questions));

const randomQuestions = getRandomQuestions(10, questions);

// Timer
let timeLeft = 0;

// Trackers
let score = 0;
let currentQuestionIndex = 0;
let currentQuestion = {};
let questionNum = 0;
let correctAnswer = "";

// Constants
const TIME_LEFT = 75;
const TIME_INTERVAL = 1000;
const TIME_PENALTY = 10;

// Quiz logic

const startQuiz = () => {
  resetQuiz();
  time.textContent = timeLeft;
  showQuestions();
  startTimer();
}

const resetQuiz = () => {
  currentQuestionIndex = 0;
  score = 0;
  timeLeft = TIME_LEFT;
}

const handleWrongAnswer = () => {
  timeLeft -= TIME_PENALTY;
  feedback.textContent = "Wrong!";
}

const handleCorrectAnswer = () => {
  feedback.textContent = "Correct!";
}

const startTimer = () => {
  const timeInterval = setInterval(() => {
    timeLeft--;

    if (timeLeft >= 0) {
      time.textContent = timeLeft;
    }

    if (timeLeft <= 0 || currentQuestionIndex === randomQuestions.length) {
      clearInterval(timeInterval);
      score = timeLeft < 0 ? 0 : timeLeft;
      time.textContent = timeLeft < 0 ? 0 : timeLeft;
      finalScore.textContent = score;
      questionsContainer.classList.add("hide");
      endScreen.classList.remove("hide");
    }
  }, TIME_INTERVAL);
}

const showQuestions = () => {
  startScreen.classList.add("hide");
  questionsContainer.classList.remove("hide");

  clearChoiceContainer();

  currentQuestion = randomQuestions[currentQuestionIndex];
  correctAnswer = currentQuestion.correctAnswer;

  questionNum = currentQuestionIndex + 1;
  questionTitle.textContent = `${questionNum}. ${currentQuestion.question}`;

  currentQuestion.answers.forEach(answer => {
    const button = createChoiceButton(answer);
    choices.appendChild(button);
  });
}

const createChoiceButton = (answer) => {
  const button = document.createElement("button");
  button.textContent = answer.join(". ");
  if (answer[0] === correctAnswer) {
    button.dataset.correct = correctAnswer;
  }
  button.addEventListener("click", selectAnswer);
  return button;
}

const clearChoiceContainer = () => {
  choices.innerHTML = ""
}

const selectAnswer = (e) => {
  const selectedAnswer = e.target;
  const isCorrect = selectedAnswer.dataset.correct === correctAnswer;

  feedback.classList.remove("hide");

  if (isCorrect) {
    handleCorrectAnswer();
  } else {
    handleWrongAnswer();
  }

  setTimeout(() => {
    feedback.classList.add("hide");
    feedback.textContent = "";
  }, 2000);

  currentQuestionIndex++;

  if (currentQuestionIndex === randomQuestions.length) {
    questionsContainer.classList.add("hide");
    endScreen.classList.remove("hide");
  } else {
    showQuestions();
  }
}

start.addEventListener("click", startQuiz);