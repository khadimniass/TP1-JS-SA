//initiatlisation
const btnajouter = document.querySelector("#ajouter");
const sorti=document.querySelector('.textarea-items');

//
function builer(){
    var grandiv=document.createElement('div');
    grandiv.class='header-area';
    var  mydivh=document.createElement('div');
    mydivh.class = 'header';

    var imgedit=document.createElement('img');
    imgedit.src= 'imgs/edit1.png';
    imgedit.id= 'edit';
    imgedit.alt= 'edit';
    const mydivspace=document.createElement('div');
    
    var imgecorbeille=document.createElement('img');
    imgecorbeille.src='imgs/corbeille.png';
    imgecorbeille.id='corbeille';
    imgecorbeille.alt='corbeille';
    mytextarea=document.createElement('textarea');
    var divitem=document.createElement('div');
    divitem.class="item";

    mydivh.appendChild(imgedit);
    mydivh.appendChild(mydivspace);
    mydivh.appendChild(imgecorbeille);
    grandiv.appendChild(mydivh);
    divitem.appendChild(mytextarea);
    grandiv.appendChild(divitem);
    grandiv.appendChild(mydivh);
    
    sorti.appendChild(grandiv);
    
}

// 
btnajouter.addEventListener("click", function (e) {
  builer();
});
