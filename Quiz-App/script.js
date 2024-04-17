const quizData = [
    {
        question : " oussama est un mangol",
        a : "vrai",
        b : "faux",
        correct : "a"
    },
    {
        question : "est ce que oussama est un mangol",
        a : "vrai",
        b : "faux",
        correct : "a"
    },
    {
        question : "qul est le nom de oussama",
        a : "mangoool",
        b : "mangol",
        correct : "a"
    }
];

const question = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");

let currentQuiz = 0;

loadQuiz();

function loadQuiz(){
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    
    currentQuiz++;
    
}