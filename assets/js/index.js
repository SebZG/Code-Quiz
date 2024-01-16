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
// Audio
const correctSound = new Audio("./assets/sfx/correct.wav")
const wrongSound = new Audio("./assets/sfx/incorrect.wav")


// Generate 10 random questions from questions list
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const getRandomQuestions = (length, questions) => {
  const shuffledQuestions = shuffleArray([...questions]);
  return shuffledQuestions.slice(0, length);
};

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
const TIME_PENALTY = 10;
const TIME_INTERVAL = 1000;
const TIME_OUT = 2000;

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

const handleCorrectAnswer = () => {
  feedback.textContent = "Correct!";
  correctSound.play();
}
const handleWrongAnswer = () => {
  timeLeft -= TIME_PENALTY;
  feedback.textContent = "Wrong!";
  wrongSound.play();
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

  console.log(randomQuestions)

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
  }, TIME_OUT);

  currentQuestionIndex++;

  if (currentQuestionIndex === randomQuestions.length) {
    questionsContainer.classList.add("hide");
    endScreen.classList.remove("hide");
  } else {
    showQuestions();
  }
}

start.addEventListener("click", startQuiz);

// Submit scores

submit.onclick = () => {
  const storedScores = localStorage.getItem("scores");
  const scores = storedScores ? JSON.parse(storedScores) : [];

  const playerInitials = initials.value;

  const playerData = {
    initials: playerInitials,
    score: score,
  };

  scores.push(playerData);

  localStorage.setItem("scores", JSON.stringify(scores));

  window.location.href = "highscores.html";
};