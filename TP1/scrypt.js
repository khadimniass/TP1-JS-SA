//initiatlisation
const btnajouter = document.querySelector("#ajouter");
const sorti = document.querySelector(".textarea-items");

//const toggle = document.querySelector(".header-area");

//
function createur() {
  var grandiv = document.createElement("div"); //iem
  grandiv.className = "header-area";
  var mydivh = document.createElement("div");
  mydivh.className = "header";

  var imgedit = document.createElement("img");
  imgedit.src = "imgs/edit1.png";
  imgedit.id = "edit";
  imgedit.width = "20";
  imgedit.alt = "edit";
  var btnedit = document.createElement("button");
  btnedit.appendChild(imgedit);

  var imgecorbeille = document.createElement("img");
  imgecorbeille.src = "imgs/corbeille.png";
  imgecorbeille.id = "corbeille";
  imgecorbeille.alt = "corbeille";
  imgecorbeille.width = "15";
  var btncorb = document.createElement("button");
  btncorb.appendChild(imgecorbeille);

  var mytextarea = document.createElement("textarea");
  // mytextarea.setAttribute('rows','10');
  mytextarea.rows = "10"
  mytextarea.setAttribute('placeholder','double click to see');
  var divitem = document.createElement("div");
  divitem.className = "item";
  mydivh.appendChild(btnedit);
  mydivh.appendChild(btncorb);
  grandiv.appendChild(mydivh);
  divitem.appendChild(mytextarea);
  grandiv.appendChild(divitem);
  sorti.appendChild(grandiv);

  btncorb.addEventListener("click", function () {
    if (confirm("veux tu vraiment effacer ?")) {
      btncorb.parentNode.parentNode.remove();
    }
  });
  //edit
  btnedit.addEventListener("click", function () {
    mytextarea.toggleAttribute("disabled");
  });

  //evenment db to move textare
  grandiv.addEventListener("dblclick", function () {
    // mytextarea.removeAttribute('rows');
    // mytextarea.rows="0"
    mytextarea.classList.toggle("d");
  });
}

//
btnajouter.addEventListener("click", function (e) {
  createur();
});
