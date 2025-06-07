const questions = [
    {
        question: "Яка планета найбільша в нашій Сонячній системі?",
        answers: [
            { text: "Юпітер", correct: true },
            { text: "Земля", correct: false },
            { text: "Сатурн", correct: false },
            { text: "Марс", correct: false }
        ]
    },
    {
        question: "Як називається супутник Землі?",
        answers: [
            { text: "Місяць", correct: true },
            { text: "Марс", correct: false },
            { text: "Сатурн", correct: false },
            { text: "Венера", correct: false }
        ]
    },
    {
        question: "Коли було здійснено перший політ людини в космос?",
        answers: [
            { text: "1961", correct: true },
            { text: "1957", correct: false },
            { text: "1975", correct: false },
            { text: "1980", correct: false }
        ]
    },
    {
        question: "Яка планета найближча до Сонця?",
        answers: [
            { text: "Меркурій", correct: true },
            { text: "Венера", correct: false },
            { text: "Земля", correct: false },
            { text: "Марс", correct: false }
        ]
    },
    {
        question: "Хто був першим космонавтом?",
        answers: [
            { text: "Юрій Гагарін", correct: true },
            { text: "Ніл Армстронг", correct: false },
            { text: "Валентина Терешкова", correct: false },
            { text: "Юрій Кондратюк", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const answersContainer = document.getElementById('answers');
const nextButton = document.getElementById('next-btn');
const resultElement = document.getElementById('result');

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answersContainer.innerHTML = ''; // Очищаємо попередні відповіді

    currentQuestion.answers.forEach(answer => {
        const answerButton = document.createElement('button');
        answerButton.classList.add('answer-btn');
        answerButton.textContent = answer.text;
        answerButton.addEventListener('click', () => checkAnswer(answer));
        answersContainer.appendChild(answerButton);
    });

    nextButton.style.display = 'none'; // Сховати кнопку до вибору відповіді
}

function checkAnswer(answer) {
    const currentQuestion = questions[currentQuestionIndex];
    if (answer.correct) {
        score++;
    }
    Array.from(answersContainer.children).forEach(button => {
        button.disabled = true; // Відключаємо всі кнопки після вибору
    });
    nextButton.style.display = 'inline-block'; // Показуємо кнопку для наступного питання
}

function showResult() {
    questionElement.style.display = 'none';
    answersContainer.style.display = 'none';
    nextButton.style.display = 'none';
    resultElement.textContent = `Твій результат: ${score} з ${questions.length}`;
    resultElement.classList.remove('hidden');
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

loadQuestion();
