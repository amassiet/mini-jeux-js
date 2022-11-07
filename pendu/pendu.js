/* TOdo List
Générer un mot aléatoire
affiché le mot masqué
pouvoir proposé des lettres
afficher les lettres trouvées
gérer un nombre d'erreurs max
*/


const buttonPlay = document.getElementById("beginGame");
const allWords =["ministre", "consistution", "congolais","prisonnier"];

buttonPlay.addEventListener("click", function(){
    beginGame();
});

function beginGame(){
    // Générer un mot aléatoire
};

function generateWord(){
    let wordToFind=getRandomInt();
};

function getRandomInt(max){
    return Math.floor(Math.random() * max)
};