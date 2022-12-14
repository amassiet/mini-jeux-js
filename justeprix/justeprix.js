//Générer un chifre en aléatoire
// l'utilisateur donne des nombres

let NumberToFind = 0;
const resultDiv=document.getElementById("resultDiv");
const resultFin=document.getElementById("resultFin");
const reboursDiv=document.getElementById("compte_a_rebours");
const propal=document.getElementById("propal");
const userPropalInput=document.getElementById("userPropalInput");
let nbTentative = 0;
let tempsRestant=0;
let compteurInterval = null;

document.getElementById("beginGame").addEventListener("click", function(){
    launchGame();
});

document.getElementById("checkPropalButton").addEventListener("click", function(){
    checkPropal();
})

document.getElementById("userPropalInput").addEventListener("keyup", function(event){
    if(event.key =="Enter"){
    checkPropal();
    }
})

function getRandomInt(max){
    return Math.floor(Math.random()*max);
}


function checkPropal(){
    nbTentative+=1;
    let numberPropal = document.getElementById("userPropalInput").value;
    if(numberPropal>NumberToFind){
        resultDiv.innerHTML +="<br> tentative " + nbTentative+ " :" + numberPropal + ": C'est moins !";
    }
    else if(numberPropal<NumberToFind){
        resultDiv.innerHTML+="<br> tentative " + nbTentative+ " :"+ numberPropal + ":C'est plus !";
    }
    else if(numberPropal == NumberToFind){
        endGame();
        resultFin.innerHTML="Réussite en " + nbTentative + " essais <br>" + numberPropal + ":C'est gagné !";
        resultFin.innerHTML+="<br><img src='./lib/c-est-la-fete-emoji.gif'>";
        let audio = new Audio("./lib/applaudissements.mp3");
        audio.play();
        
    
    }
    document.getElementById("userPropalInput").value = "";
    console.log(nbTentative);
}

function launchGame(){
    NumberToFind=getRandomInt(1000);
    
    propal.style.display = 'block';
    tempsRestant = 30;
    if(compteurInterval!= null){
        clearInterval(compteurInterval);
    }
    compteurInterval = setInterval(()=>{
        reboursDiv.innerText = tempsRestant ;
        tempsRestant--;
        if(tempsRestant>=20){
            reboursDiv.classList.remove("danger");
            reboursDiv.classList.remove("warning");
            reboursDiv.classList.add("cool");
        }
        else if(tempsRestant>=10){
            reboursDiv.classList.remove("danger");
            reboursDiv.classList.remove("cool");
            reboursDiv.classList.add("warning");
        }
        else if(tempsRestant>=0){
            reboursDiv.classList.remove("cool");
            reboursDiv.classList.remove("warning");
            reboursDiv.classList.add("danger");
            let audio = new Audio("./lib/bip.mp3");
            audio.play();
        }
        else if (tempsRestant<0){
            endGame();
            resultFin.innerHTML ="Perdu après " + nbTentative +" essais";
            resultFin.innerHTML+="<br><img src='./lib/sobbing.gif'>";
            let audio = new Audio("./lib/rire.mp3");
            audio.play();
        };
    },1000);
    nbTentative= 0;
    resultDiv.innerHTML =""
    resultFin.innerHTML =""
    //alert(NumberToFind);
}

function endGame(){
    clearInterval(compteurInterval);
    propal.style.display = 'none';
    userPropalInput.value = '';
    reboursDiv.innerText = "" ;
    resultDiv.innerHTML ="";
    
}