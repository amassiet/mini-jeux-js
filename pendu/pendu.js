/* TOdo List
Générer un mot aléatoire
affiché le mot masqué
pouvoir proposé des lettres
afficher les lettres trouvées
gérer un nombre d'erreurs max
afficher des lettres visibles en fonction de la difficlultés
*/


const buttonPlay = document.getElementById("beginGame");
const allWords =["ministre", "constitution", "congolais","prisonnier","chomage", "economie","corrompre", "sapeur", "Abeille",
"Baleine","Cachalot","Cerf","Chat","Chevre","Chien","Cigale","Coq","Cygne","Dauphin","Dindon","Dromadaire","Girafe","Gorille","Grenouille","Herisson","Hyene","Hippopotame","Koala","Kangourou","Lama","Lezard","Lievre","Lion","Loup","Morse","Ours","Otarie","Panda","Paresseux","Pélican","Phoque","Poisson","Raton laveur","Requin","Rhinoceros","Sanglier","Sauterelle","Serpent","Suricate",
"Tapir","Toucan","Tigre","Zebre", "Jupiter",
"Tubes","Sept","Peste","Virus","Tendre","Cuisine","Toile","Aspirine","Cendres",
"Gentil","Burger","Tomate","Facile","Marche","Rayon","Ombre","Vocal","Viande","Surf","Crayon","Sablier","Flotteur","Tombe","emeute","Bijou","Statue","Lotus","Seringue","Souffrir","Anchois","Verser","Susciter","Province","occuper","Sculpter","Antilope","Missile","Palette","Ananas","Vapeur","Africain","Couronne","Contamination","Imposition","Masseuse","Appeau","Marathon","Puce","Abri"
];
const wordToFindDiv = document.getElementById("wordToFindDiv");
const keyBoardDiv = document.getElementById("keyBoard");
let wordToFind="";
let wordToFindArray="";
let cptErreur = 0;
let cptLettreTrouvee = 0;
const cptErreurDiv=document.getElementById("cptErreur");
let imgPendu = document.getElementById("imagePendu");

buttonPlay.addEventListener("click", function(){
    beginGame();
});

function beginGame(){
    // Générer un mot aléatoire
    cptErreur = 0;
    cptErreurDiv.innerHTML = "";
    imgPendu.className="";
    imgPendu.classList.add("etat"+cptErreur);
    cptLettreTrouvee=0;
    wordToFindDiv.innerHTML = "";
    wordToFind = generateWord();
    wordToFind = wordToFind.toLowerCase();
    console.log(wordToFind);
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
                        cptLettreTrouvee++;
                    }
                });

                if(cptLettreTrouvee==wordToFindArray.length){
                    keyBoardDiv.innerHTML = "";
                    cptErreurDiv.innerHTML = "Gagné avec " + cptErreur +" erreur(s)";
                };
            }
            else{
                cptErreur++;
                cptErreurDiv.innerHTML = cptErreur;
                
                imgPendu.className="";
                imgPendu.classList.add("etat"+cptErreur);
                if(cptErreur == 6){
                    cptErreurDiv.innerHTML = "Perdu!";
                    let lineWord = document.getElementById("lineOfWord");
                    let allTdOfWord = lineWord.children;

                    Array.from(allTdOfWord).forEach(td => {
                    
                        td.innerHTML = td.dataset.letter;
                    
                });
                keyBoardDiv.innerHTML = "";
                }
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