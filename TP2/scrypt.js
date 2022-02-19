const butGd = document.querySelector("#btn-g-d");
const divP = document.querySelector(".paragraph");

var tab = [
  " mon premier",
  "mon deuxieme",
  "mon troisieme",
  "mon Quatrieme",
  "mon cinquieme"
];
for (let i = 0; i < tab.length; i++) {
  const p = document.createElement("p");
  p.innerHTML = tab[i];
  p.id='idp';
  divP.appendChild(p);
}
butGd.addEventListener("click", function () {
  // p.innerHTML=
});
p.addEventListener("dbclick", function (e) {
   alert('hello')
});
