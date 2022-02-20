const startButton = document.getElementById("startButton");
const gpcontQuest = document.querySelector(".container");
const Contquest = document.getElementById("question");
let qN;

QUESTIONS = [
  {
    question: "Quel est le MeilleurLanguage de Programmation en 2022",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question:
      "Je suis un langage utilisé principalement en mathématiques et pour les sciences :",
    a: "Fortran",
    b: "AppleScript",
    c: "PHP",
    d: "java",
    correct: "a",
  },
  {
    question: "quelle balise permet d'aller à la ligne",
    a: "<br>",
    b: "<p>",
    c: "<b>",
    d: "<pre>",
    correct: "a",
  },
  {
    question:
      "Parmis les propositions suivantes, quel langage est très utilisé pour les pages web ?",
    a: "COBOL",
    b: "PHP",
    c: "python",
    d: "SPL",
    correct: "b",
  },
  {
    question: "Je suis un langage de programmation créé par Microsoft :",
    a: " Shell Unix",
    b: "Shuift",
    c: "Visual Basic",
    d: "C#",
    correct: "c",
  },
  {
    question:
      "Parmis ces propositions laquelle n'est pas un langage de programmation ?",
    a: "Caml",
    b: "RedHat",
    c: "Eiffel",
    d: "C++",
    correct: "b",
  },
];

function startGame() {
  startButton.classList.add("hiden");
  qN = 0;
  while (Contquest.firstChild) {
    Contquest.removeChild(Contquest.firstChild);
  }
 // showQuestion(QUESTIONS[qN]);
}
// answers=correct
function showQuestion(question) {
  qN.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
}

startButton.addEventListener("click", function () {
  startGame();
});
