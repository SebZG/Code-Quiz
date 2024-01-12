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

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 0;

const getRandomIndex = (arr) =>
  arr[Math.floor(Math.random() * arr.length)];

const getRandomQuestions = (length, questions) =>
  Array.from({ length }, () => getRandomIndex(questions));

console.log(getRandomQuestions(10, questions));