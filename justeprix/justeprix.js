//Générer un chifre en aléatoire
// l'utilisateur donne des nombres

let NumberToFind = 0;

document.getElementById("beginGame").addEventListener("click", function(){
    NumberToFind=getRandomInt(1000);
    alert(NumberToFind);
})

function getRandomInt(max){
    return Math.floor(Math.random()*max);
}