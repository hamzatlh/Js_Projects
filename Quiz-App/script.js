const quizData = [
    {
        question : "Oussama est un mangol ?",
        a : "vrai",
        b : "faux",
        correct : "a"
    },
    {
        question : "Est ce que oussama est un mangol ?",
        a : "vrai",
        b : "faux",
        correct : "a"
    },
    {
        question : "Qul est le nom de oussama ?",
        a : "mangoool",
        b : "mangol",
        correct : "a"
    }
];

const questionEl = document.getElementById("question");
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a-text");
const b_text = document.getElementById("b-text");
const SubmitBtn = document.getElementById("SubmitBtn");

let currentQuiz = 0;
let score = 0;


loadQuiz();

function loadQuiz(){
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
}

function getSelected ()
{
    let answer = undefined;
    answerEls.forEach((answerEls) => 
    {
        if (answerEls.checked){
            answer = answerEls.id;
        }
    });

    return answer;
}

function deselectAnswer()
{
    answerEls.forEach((answerEls) => 
    {
        answerEls.checked = false;
    });

}

SubmitBtn.addEventListener("click", () => {

    const answer = getSelected();

    console.log(answer);

    if (answer)
    {
        if (answer === quizData[currentQuiz].correct){
            score++;
        }
        console.log(score);
        currentQuiz++;
        if (currentQuiz < quizData.length){
            loadQuiz();
        }
        else{
            quiz.innerHTML = `<h2>Jawbti 3la  ${score}/${quizData.length} a lmangoool .</h2>
            <button onclick="location.reload()">Reload</button>`;
        }
    }
});