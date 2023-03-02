const quizContainer = document.querySelector('.quiz-container');
const questionContainer = document.querySelector('.question-container');
const question = document.querySelector('.question');
const choicesContainer = document.querySelector('.choices-container');
const choiceInputs = document.querySelectorAll('.choice input[type="radio"]');
const submitButton = document.querySelector('#submit');
const scoreContainer = document.querySelector('.score-container');
const score = document.querySelector('#score');

let currentQuestion = 0;
let scoreCount = 0;

const questions = [
  {
    question: 'Who is the author of the Harry Potter book series?',
    choices: ['J.K. Rowling', 'Stephen King', 'George R.R. Martin', 'Dan Brown'],
    answer: 0
  },
  {
    question: 'What is the smallest country in the world by land area?',
    choices: ['Monaco', 'Vatican City', 'San Marino', 'Liechtenstein'],
    answer: 1
  },
  {
    question: 'What is the largest ocean in the world?',
    choices: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
    answer: 3
  },
  {
    question: 'Who invented the telephone?',
    choices: ['Alexander Graham Bell', 'Thomas Edison', 'Nikola Tesla', 'Guglielmo Marconi'],
    answer: 0
  },
  {
    question: 'What is the name of the first man to walk on the moon?',
    choices: ['Buzz Aldrin', 'Neil Armstrong', 'Yuri Gagarin', 'Alan Shepard'],
    answer: 1
  },
  {
    question: 'What is the highest mountain in the world?',
    choices: ['Mount Everest', 'K2', 'Makalu', 'Cho Oyu'],
    answer: 0
  },
  {
    question: 'What is the capital city of France?',
    choices: ['Paris', 'London', 'Berlin', 'Madrid'],
    answer: 0
  },
  {
    question: 'What is the largest planet in our solar system?',
    choices: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
    answer: 2
  },
  {
    question: 'What is the most spoken language in the world?',
    choices: ['Spanish', 'Mandarin Chinese', 'English', 'Hindi'],
    answer: 1
  }
];

function showQuestion() {
  question.textContent = questions[currentQuestion].question;

  choicesContainer.innerHTML = '';

  questions[currentQuestion].choices.forEach((choice, index) => {
    const choiceDiv = document.createElement('div');
    choiceDiv.classList.add('choice');

    const choiceInput = document.createElement('input');
    choiceInput.setAttribute('type', 'radio');
    choiceInput.setAttribute('name', 'answer');
    choiceInput.setAttribute('id', `answer${index}`);
    choiceInput.addEventListener('change', () => {
      submitButton.disabled = false;
    });

    const choiceLabel = document.createElement('label');
    choiceLabel.setAttribute('for', `answer${index}`);
    choiceLabel.textContent = choice;

    choiceDiv.appendChild(choiceInput);
    choiceDiv.appendChild(choiceLabel);

    choicesContainer.appendChild(choiceDiv);
  });

  submitButton.disabled = true;
}

function checkAnswer() {
  let selectedAnswer = null;

  choiceInputs.forEach(input => {
    if (input.checked) {
      selectedAnswer = input.id.slice(-1);
    }
  });

  if (selectedAnswer !== null) {
    if (selectedAnswer == questions[currentQuestion].answer) {
      scoreCount++;
    }
    currentQuestion++;

    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  }
}

submitButton.addEventListener('click', checkAnswer);

function showScore() {
  quizContainer.style.display = 'none';
  scoreContainer.style.display = 'block';
  score.textContent = `${scoreCount} out of ${questions.length}`;
}
