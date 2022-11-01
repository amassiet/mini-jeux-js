//Générer un chifre en aléatoire
// l'utilisateur donne des nombres

let NumberToFind = 0;
const resultDiv=document.getElementById("resultDiv");
const resultFin=document.getElementById("resultFin");
const reboursDiv=document.getElementById("compte_a_rebours");
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
        resultFin.innerHTML+="<br><img src='./c-est-la-fete-emoji.gif'>";
        let audio = new Audio("./applaudissements.mp3");
        audio.play();
        
    
    }
    document.getElementById("userPropalInput").value = "";
    console.log(nbTentative);
}

function launchGame(){
    NumberToFind=getRandomInt(1000);
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
        }
        else if (tempsRestant<0){
            endGame();
            resultFin.innerHTML ="Perdu après " + nbTentative +" essais";
        };
    },1000);
    nbTentative= 0;
    resultDiv.innerHTML =""
    resultFin.innerHTML =""
    //alert(NumberToFind);
}

function endGame(){
    clearInterval(compteurInterval);
    reboursDiv.innerText = "" ;
    resultDiv.innerHTML ="";
    
}