const questions = [
  {
    id: 1,
    question: "What is JavaScript primarily used for?",
    answers: {
      A: "Styling web pages",
      B: "Adding interactivity to web pages",
      C: "Creating databases",
      D: "Designing graphics"
    },
    correctAnswer: "B"
  },
  {
    id: 2,
    question: "Which keyword is used to declare a variable in JavaScript?",
    answers: {
      A: "var",
      B: "let",
      C: "const",
      D: "All the above"
    },
    correctAnswer: "D"
  },
  {
    id: 3,
    question: "What does the 'DOM' stand for in JavaScript?",
    answers: {
      A: "Document Object Model",
      B: "Data Object Model",
      C: "Dynamic Object Management",
      D: "Document Oriented Middleware"
    },
    correctAnswer: "A"
  },
  {
    id: 4,
    question: "Which of the following is not a JavaScript data type?",
    answers: {
      A: "String",
      B: "Boolean",
      C: "Float",
      D: "Object"
    },
    correctAnswer: "C"
  },
  {
    id: 5,
    question: "What does the 'NaN' stand for in JavaScript?",
    answers: {
      A: "Not a Null",
      B: "Not a Number",
      C: "No Assignment",
      D: "Null and Not Defined"
    },
    correctAnswer: "B"
  },
  {
    id: 6,
    question: "Which operator is used for strict equality in JavaScript?",
    answers: {
      A: "==",
      B: "===",
      C: "!=",
      D: "!=="
    },
    correctAnswer: "B"
  },
  {
    id: 7,
    question: "What is the purpose of the 'return' statement in a function?",
    answers: {
      A: "To end the function execution",
      B: "To return a value from the function",
      C: "To declare a variable",
      D: "To console log a message"
    },
    correctAnswer: "B"
  },
  {
    id: 8,
    question: "Which function is used to convert a string to an integer in JavaScript?",
    answers: {
      A: "parseInt()",
      B: "parseFloat()",
      C: "toInteger()",
      D: "convertToInt()"
    },
    correctAnswer: "A"
  },
  {
    id: 9,
    question: "What is the role of 'let' and 'const' in variable declaration?",
    answers: {
      A: "They indicate the type of variable",
      B: "They define constants",
      C: "They define block-scoped variables",
      D: "They are interchangeable with 'var'"
    },
    correctAnswer: "C"
  },
  {
    id: 10,
    question: "Which method is used to add an element at the end of an array in JavaScript?",
    answers: {
      A: "append()",
      B: "push()",
      C: "addToEnd()",
      D: "insertAtEnd()"
    },
    correctAnswer: "B"
  },
  {
    id: 11,
    question: "What is the purpose of the 'this' keyword in JavaScript?",
    answers: {
      A: "It refers to the current file",
      B: "It refers to the current function",
      C: "It refers to the current object",
      D: "It refers to the parent function"
    },
    correctAnswer: "C"
  },
  {
    id: 12,
    question: "What is an IIFE in JavaScript?",
    answers: {
      A: "Immediately Invoked Function Expression",
      B: "Internal Iterative Function Execution",
      C: "Inline Incremental File Execution",
      D: "Intermittent Inherited Function Expression"
    },
    correctAnswer: "A"
  },
  {
    id: 13,
    question: "Which method is used to remove the last element from an array in JavaScript?",
    answers: {
      A: "removeLast()",
      B: "pop()",
      C: "deleteLast()",
      D: "removeEnd()"
    },
    correctAnswer: "B"
  },
  {
    id: 14,
    question: "What does the 'typeof' operator return in JavaScript?",
    answers: {
      A: "The type of the variable",
      B: "The value of the variable",
      C: "The length of the variable",
      D: "The index of the variable"
    },
    correctAnswer: "A"
  },
  {
    id: 15,
    question: "Which event is triggered when a user clicks on an HTML element?",
    answers: {
      A: "onhover",
      B: "onmove",
      C: "onclick",
      D: "ondrag"
    },
    correctAnswer: "C"
  },
  {
    id: 16,
    question: "What is the purpose of the 'try', 'catch', and 'finally' blocks in JavaScript?",
    answers: {
      A: "To create loops",
      B: "To handle exceptions",
      C: "To define functions",
      D: "To declare variables"
    },
    correctAnswer: "B"
  },
  {
    id: 17,
    question: "What is the purpose of the 'localStorage' object in JavaScript?",
    answers: {
      A: "To store data on the server",
      B: "To store data on the client-side",
      C: "To store session data",
      D: "To store temporary data"
    },
    correctAnswer: "B"
  },
  {
    id: 18,
    question: "Which method is used to join elements of an array into a string in JavaScript?",
    answers: {
      A: "concat()",
      B: "merge()",
      C: "join()",
      D: "combine()"
    },
    correctAnswer: "C"
  },
  {
    id: 19,
    question: "What is the purpose of the 'fetch' API in JavaScript?",
    answers: {
      A: "To fetch data from a database",
      B: "To fetch resources from the network",
      C: "To fetch CSS styles",
      D: "To fetch images"
    },
    correctAnswer: "B"
  },
  {
    id: 20,
    question: "Which method is used to convert a JavaScript object to a JSON string?",
    answers: {
      A: "toJSON()",
      B: "stringify()",
      C: "convertToString()",
      D: "objectToJSON()"
    },
    correctAnswer: "B"
  }
];


export default questions;