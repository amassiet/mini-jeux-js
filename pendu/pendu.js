/* TOdo List
Générer un mot aléatoire
affiché le mot masqué
pouvoir proposé des lettres
afficher les lettres trouvées
gérer un nombre d'erreurs max
afficher des lettres visibles en fonction de la difficlultés
*/


const buttonPlay = document.getElementById("beginGame");
const allWords =["ministre", "constitution", "congolais","prisonnier","chomage", "economie","corrompre", "sapeur"];
const wordToFindDiv = document.getElementById("wordToFindDiv");
const keyBoardDiv = document.getElementById("keyBoard");
let wordToFind="";
let wordToFindArray="";
let cptErreur = 0;

buttonPlay.addEventListener("click", function(){
    beginGame();
});

function beginGame(){
    // Générer un mot aléatoire
    wordToFindDiv.innerHTML = "";
    wordToFind = generateWord();
    //wordToFindDiv.innerHTML = wordToFind;
    wordToFindArray = Array.from(wordToFind);
    let table = document.createElement("table");
    let line = document.createElement("tr");
    line.id = "lineOfWord"
    
    wordToFindArray.forEach(letter =>{
        let td = document.createElement("td");
        td.dataset.letter = letter;
        td.innerText = "_";
        line.appendChild(td);
    });
    table.appendChild(line);
    wordToFindDiv.appendChild(table);
    generateKeyBoard();
    
};

function generateKeyBoard(){
    keyBoardDiv.innerHTML="";
    let alphabet = generateAlphabet(true);
    alphabet.forEach(letter => {
        let lettreDiv = document.createElement("div");
        lettreDiv.innerHTML = letter;
        lettreDiv.classList.add("letterKeyBoard");
        keyBoardDiv.appendChild(lettreDiv);

        lettreDiv.addEventListener('click',()=>{
            if(checkLetterInWord(letter)){
                let lineWord = document.getElementById("lineOfWord");
                let allTdOfWord = lineWord.children;

                Array.from(allTdOfWord).forEach(td => {
                    if (td.dataset.letter == letter){
                        td.innerHTML = letter;
                    }
                });
            }
            else{
                cptErreur++;
                document.getElementById("cptErreur").innerHTML = cptErreur;
            };

            lettreDiv.style.visibility = 'hidden';
        });
    });
};

function generateAlphabet(capital = false){
    //return [...Array(26)].map((_,i) => String.fromCharCode(i + (capital ? 65 : 97)));

    let tab=[];
    for(i=0; i<26; i++){
        if(capital){
            tab.push(String.fromCharCode(i + 97));
        }
        else{
            tab.push(String.fromCharCode(i + 65));
        }
    }
    return tab;
};

function generateWord(){
    let indexWord=getRandomInt(allWords.length);
    return allWords[indexWord];
};

function getRandomInt(max){
    return Math.floor(Math.random() * max);
};

function checkLetterInWord(letter){
    let isInWord = false
    wordToFindArray.forEach(letterOfWord => {
        if(letterOfWord == letter){
            isInWord = true;
        };
    });
    return isInWord;
};