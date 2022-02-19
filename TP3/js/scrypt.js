const placepassword = document.querySelector(".pwd-2"); //afficher apres generation
const btnGenrator=document.querySelector('.btn');
const form=document.getElementById('form');
/*checkbox button*/
const inputNumber=document.getElementById('nombre');
const Cmajuscule=document.querySelector('#majuscules');
const Cminuscule=document.getElementById("minuscules");
const Cnombre=document.querySelector('#nbm');
const Cspecial=document.querySelector('#special');

function getNumber() {
    return Math.floor(Math.random()*10);
}
function getLower() {
    var minuscule = "abcdefghijklmnopqrstuvwxyz";
    minay=Array.from(minuscule);
    return minay[Math.floor(Math.random()*minay.length)];
}
function getUpper(){
    return getLower().toUpperCase();
}
function getSpecial() {
    var special="`~!@#$%^&*()-_=+[{]}\\|;:'\",<.>/? ";
    arrayChar=Array.from(special);
    return arrayChar[Math.floor(Math.random()*arrayChar.length)];
}

function genPwd(lenght, majus,minus,nb,sp) {
    var pwd=[];
    if (majus){ma=getUpper()};
    if (minus)mi=getLower();
    if (sp) caract=getSpecial();

    for (var i of lenght) {
        pwd.push(getUpper());
        pwd.push(getLower());
        pwd.push(getNumber());
        pwd.push(getSpecial());

    }
    return pwd.join("");
}

form.addEventListener('submit',function(e){
    e.preventDefault();
    const lenP=inputNumber.value;
    const maj=Cmajuscule.checked;
    const min=Cminuscule.checked;
    const special =Cspecial.checked;
    const dp=document.createElement('div');
    const pwd = genPwd(lenP,maj,min,special)
    dp.innerHTML=pwd;
    placepassword.appendChild(dp);
    
});