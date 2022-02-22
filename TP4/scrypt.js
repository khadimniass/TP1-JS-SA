const startButton = document.getElementById("startButton");
const btbSuivant = document.querySelector(".Suivant");
const gpcontQuest = document.querySelector(".container");
const Contquest = document.getElementById("questions");
const question = document.getElementById("question");
const containtscore = document.querySelector(".containt-score");
let questionPlaceS = document.querySelector(".question-place"); //liste des reponses eventuels
const resultat=document.querySelector('.containt-score');
const nbpoint=document.querySelector('.result');
let QUESTIONS = [
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
//button de démarrage du jeu
function startGame() {
  startButton.classList.add("hiden");
  gpcontQuest.classList.add("display");
}

//generateur de questions
function getQuestion() {
  let Q;
  questionPlaceS.forEach((item) => {
    if (item.checked) {
      Q = item.id;
    }
  });
  return Q;
}

function selectQuestion() {
  questionPlaceS.forEach((item) => {
    item.checked = false;
  });
}
let cpt=0;
let score=0;
function rafrechirJeu() {
  selectQuestion()
  const questionEncour = QUESTIONS[cpt];
  question.innerHTML=questionEncour.question;
  questionPlaceS.innerHTML=questionEncour.a;
  questionPlaceS.innerHTML=questionEncour.b;
  questionPlaceS.innerHTML=questionEncour.c;
  questionPlaceS.innerHTML=questionEncour.d;  
}
/**commencer le jeu*/
startButton.addEventListener('click',function(){
  startGame();
});

btbSuivant.addEventListener("click", function () {
  const reponse=getQuestion();
  
  if (reponse) {
    if (reponse==QUESTIONS.correct) {
      score++; 
    }
    cpt++;
    if(cpt < QUESTIONS.length) {
      rafrechirJeu();
    }else{
      //affichage score : vous avez score/QUESTIONS.lenght
      resultat.classList.add("display");
      nbpoint.innerHTML=score / QUESTIONS.length;
    }
  }
});
