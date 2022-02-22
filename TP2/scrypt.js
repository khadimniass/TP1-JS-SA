const butGd = document.querySelector("#btn-g-d");
const butDg = document.querySelector("#btn-d-g");
const divP = document.querySelector(".paragraph");
const gauche = document.querySelector(".gauche");
const droite = document.querySelector(".droite");

var paragraphs = [
  " mon premier",
  "mon deuxieme",
  "mon troisieme",
  "mon Quatrieme",
  "mon cinquieme",
];
if (paragraphs.length==0) {
  butDg.disabled = true;
}
function moved() {
  //extraire les éléments du tableau et de l'afficher à gauche
  for (let i = 0; i < paragraphs.length; i++) {
    const p = document.createElement("p");
    p.innerHTML = paragraphs[i];
    p.id = "idp";
    divP.appendChild(p);

    //evenement doit s'aplliquer la balise et non sur la phrase entière
    p.addEventListener("mouseover", function () {
    p.classList.toggle("actived"); //to add in css
    });
    //btb G-D
    butGd.addEventListener("click", function () {
      const selection = document.querySelector(".actived");
      droite.appendChild(selection);
    });

    //btn D-G
    butDg.addEventListener("click", function () {
      const selection = document.querySelector(".actived");
      divP.appendChild(selection);
    });
  }
}
moved();